/**
* @file fly_mission.cpp
*
* @brief Demonstrates how to Add & Fly Waypoint missions using the MAVSDK.
* The example is summarised below:
* 1. Adds mission items.
* 2. Starts mission from first mission item.
* 3. Illustrates Pause/Resume mission item.
* 4. Exits after the mission is accomplished.
*
* @author Julian Oes <julian@oes.ch>,
* Shakthi Prashanth M <shakthi.prashanth.m@intel.com>
* @date 2017-09-06
*/
#include <mavsdk/mavsdk.h>
#include <mavsdk/plugins/action/action.h>
#include <mavsdk/plugins/mission/mission.h>
#include <mavsdk/plugins/telemetry/telemetry.h>

#include <functional>
#include <future>
#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
#include <cstdlib>
#include <stdlib.h>
#include <stdio.h>

#define ERROR_CONSOLE_TEXT "\033[31m" // Turn text on console red
#define TELEMETRY_CONSOLE_TEXT "\033[34m" // Turn text on console blue
#define NORMAL_CONSOLE_TEXT "\033[0m" // Restore normal console colour
using namespace mavsdk;
using namespace std::placeholders; // for `_1`
using namespace std::chrono; // for seconds(), milliseconds()
using namespace std::this_thread; // for sleep_for()
// Handles Action's result
inline void handle_action_err_exit(Action::Result result, const std::string&message);
// Handles Mission's result
inline void handle_mission_err_exit(Mission::Result result, const std::string& message);
// Handles Connection result
inline void handle_connection_err_exit(ConnectionResult result, const std::string& message);
static Mission::MissionItem make_mission_item(
double latitude_deg,
double longitude_deg,
float relative_altitude_m,
float speed_m_s,
bool is_fly_through,
float gimbal_pitch_deg,
float gimbal_yaw_deg,
Mission::MissionItem::CameraAction camera_action);
void usage(std::string bin_name)
{
std::cout << NORMAL_CONSOLE_TEXT << "Usage : " << bin_name << " <connection_url>" << std::endl
<< "Connection URL format should be :" << std::endl
<< " For TCP : tcp://[server_host][:server_port]" << std::endl
<< " For UDP : udp://[bind_host][:bind_port]" << std::endl
<< " For Serial : serial:///path/to/serial/dev[:baudrate]" << std::endl
<< "For example, to connect to the simulator use URL: udp://:14540" << std::endl;
}
int main(int argc, char** argv)
{
Mavsdk mavsdk;
{
auto prom = std::make_shared<std::promise<void>>();
auto future_result = prom->get_future();
std::cout << "Waiting to discover system..." << std::endl;
mavsdk.subscribe_on_new_system([&mavsdk, prom]() {
const auto system = mavsdk.systems().at(0);
if (system->is_connected()) {
std::cout << "Discovered system" << std::endl;
prom->set_value();
} else {
std::cout << "System timed out" << std::endl;
std::cout << "Exiting." << std::endl;
exit(0);
}
});
std::string connection_url;
ConnectionResult connection_result;
if (argc == 2) {
connection_url = argv[1];
connection_result = mavsdk.add_any_connection(connection_url);
} else {
usage(argv[0]);
return 1;
}
if (connection_result != ConnectionResult::Success) {
std::cout << ERROR_CONSOLE_TEXT << "Connection failed: " << connection_result << NORMAL_CONSOLE_TEXT << std::endl;
return 1;
}
future_result.get();
}
auto system = mavsdk.systems().at(0);
auto action = Action{system};
auto mission = Mission{system};
auto telemetry = Telemetry{system};
while (!telemetry.health_all_ok()) {
    std::cout << "Waiting for system to be ready" << std::endl;
sleep_for(seconds(1));
}
std::cout << "System ready" << std::endl;
std::cout << "Creating and uploading mission" << std::endl;
std::vector<Mission::MissionItem> mission_items;
float d_alt = 10.0f;
float d_speed = 5.0f;
std::ifstream ipx;
ipx.open("/home/lequyetanh/drone/data/altsp");
while(ipx.good()){
std::string alt;
std::string speed;
getline(ipx, alt, ',');
getline(ipx, speed, '\n');
if(alt.empty() || speed.empty()){
break;
}
d_alt = std::stof(alt);
d_speed = std::stof(speed);
break;
}
ipx.close();
std::ifstream ip;
ip.open("/home/lequyetanh/drone/data/input");
while(ip.good()){
std::string lon;
std::string lat;
getline(ip, lon, ',');
getline(ip, lat, '\n');
if(lat.empty() || lon.empty()){
break;
}
double d_lat = std::stod(lat);
double d_lon = std::stod(lon);
mission_items.push_back(make_mission_item(
d_lat,
d_lon,
d_alt,
d_speed,
false,
20.0f,
60.0f,
Mission::MissionItem::CameraAction::None));
}
ip.close();
{
std::cout << "Uploading mission..." << std::endl;
// We only have the upload_mission function asynchronous for now, so we wrap it using
// std::future.
auto prom = std::make_shared<std::promise<Mission::Result>>();
auto future_result = prom->get_future();
Mission::MissionPlan mission_plan{};
mission_plan.mission_items = mission_items;
mission.upload_mission_async(
mission_plan, [prom](Mission::Result result) { prom->set_value(result); });
const Mission::Result result = future_result.get();
if (result != Mission::Result::Success) {
std::cout << "Mission upload failed (" << result << "), exiting." << std::endl;
return 1;
}
std::cout << "Mission uploaded." << std::endl;
}
// We want to listen to the altitude of the drone at 1 Hz.
const Telemetry::Result set_rate_result = telemetry.set_rate_position(0.25);
if (set_rate_result != Telemetry::Result::Success) {
std::cout << ERROR_CONSOLE_TEXT << "Setting rate failed:" << set_rate_result << NORMAL_CONSOLE_TEXT << std::endl;
return 1;
}
const Telemetry::Result set_rate_result_battery = telemetry.set_rate_battery(0.25);
if (set_rate_result_battery != Telemetry::Result::Success) {
std::cout << ERROR_CONSOLE_TEXT << "Setting rate failed:" << set_rate_result_battery << NORMAL_CONSOLE_TEXT << std::endl;
return 1;
}
std::ofstream myfile;
//myfile.open("/home/hieu/MAVSDK_Project/data/output.csv",std::ios::app);
// Set up callback to monitor altitude while the vehicle is in flight
telemetry.subscribe_position([&myfile](Telemetry::Position position) {
std::cout << std::fixed;
std::cout << "Possion:" << std::endl
<< TELEMETRY_CONSOLE_TEXT // set to blue
<< "Altitude: " << position.relative_altitude_m << " m"
<< std::endl
<< "Latitude: "<< std::setprecision(5) <<
position.latitude_deg << " degree"
<< std::endl
<< "Longitude: "<< std::setprecision(5) <<
position.longitude_deg << " degree"
<< NORMAL_CONSOLE_TEXT // set to default color again
<< std::endl;
myfile.open("/home/lequyetanh/drone/data/output",std::ios::app);
myfile << position.relative_altitude_m << ",";
myfile << std::fixed << std::setprecision(5) <<
position.latitude_deg << ",";
myfile << std::fixed << std::setprecision(5) <<
position.longitude_deg << ",";
myfile.close();
});
std::atomic<bool> is_stop{false};
// get battery percent
telemetry.subscribe_battery([&myfile, &action, &is_stop,
&mission](Telemetry::Battery battery) {
std::cout << std::fixed;
std::cout << "Battery:" << std::endl
<< TELEMETRY_CONSOLE_TEXT // set to blue
<< "Battery: " << battery.remaining_percent << " m"
<< NORMAL_CONSOLE_TEXT // set to default color again
<< std::endl;
myfile.open("/home/lequyetanh/drone/data/output",std::ios::app);
myfile << std::fixed << std::setprecision(2) <<
battery.remaining_percent << "\n";
myfile.close();
});
std::cout << "Arming..." << std::endl;
const Action::Result arm_result = action.arm();
handle_action_err_exit(arm_result, "Arm failed: ");
std::cout << "Armed." << std::endl;
std::atomic<bool> want_to_pause{false};
// Before starting the mission, we want to be sure to subscribe to the mission progress.
mission.subscribe_mission_progress([&want_to_pause](Mission::MissionProgress
mission_progress) {
std::cout << "Mission status update: " << mission_progress.current
<< " / "
<< mission_progress.total << std::endl;
if (mission_progress.current >= 1) {
// We can only set a flag here. If we do more request inside the callback,
// we risk blocking the system.
want_to_pause = true;
}
});
{
std::cout << "Starting mission." << std::endl;
auto prom = std::make_shared<std::promise<Mission::Result>>();
auto future_result = prom->get_future();
mission.start_mission_async([prom](Mission::Result result) {
prom->set_value(result);
std::cout << "Started mission." << std::endl;
});
const Mission::Result result = future_result.get();
handle_mission_err_exit(result, "Mission start failed: ");
}
while (!want_to_pause) {
sleep_for(seconds(1));
}
{
auto prom = std::make_shared<std::promise<Mission::Result>>();
auto future_result = prom->get_future();
std::cout << "Pausing mission..." << std::endl;
mission.pause_mission_async([prom](Mission::Result result) { prom->set_value(result); });
const Mission::Result result = future_result.get();
if (result != Mission::Result::Success) {
std::cout << "Failed to pause mission (" << result << ")" <<
std::endl;
} else {
std::cout << "Mission paused." << std::endl;
}
}
// Pause for 5 seconds.
sleep_for(seconds(5));
// Then continue.
{
auto prom = std::make_shared<std::promise<Mission::Result>>();
auto future_result = prom->get_future();
std::cout << "Resuming mission..." << std::endl;
mission.start_mission_async([prom](Mission::Result result) { prom->set_value(result); });
const Mission::Result result = future_result.get();
if (result != Mission::Result::Success) {
std::cout << "Failed to resume mission (" << result << ")" <<
std::endl;
} else {
std::cout << "Resumed mission." << std::endl;
}
}
while (!mission.is_mission_finished().second) {
sleep_for(seconds(1));
}
{
std::cout << "Landing..." << std::endl;
const Action::Result result = action.land();
if (result != Action::Result::Success) {
std::cout << "Failed to command RTL (" << result << ")" <<
std::endl;
} else {
std::cout << "Commanded RTL." << std::endl;
}
}
// We need to wait a bit, otherwise the armed state might not be correct yet.
sleep_for(seconds(2));
while (telemetry.armed()) {
// Wait until we're done.
sleep_for(seconds(1));
}
std::cout << "Disarmed, exiting." << std::endl;
}
Mission::MissionItem make_mission_item(
double latitude_deg,
double longitude_deg,
float relative_altitude_m,
float speed_m_s,
bool is_fly_through,
float gimbal_pitch_deg,
float gimbal_yaw_deg,
Mission::MissionItem::CameraAction camera_action)
{
Mission::MissionItem new_item{};
new_item.latitude_deg = latitude_deg;
new_item.longitude_deg = longitude_deg;
new_item.relative_altitude_m = relative_altitude_m;
new_item.speed_m_s = speed_m_s;
new_item.is_fly_through = is_fly_through;
new_item.gimbal_pitch_deg = gimbal_pitch_deg;
new_item.gimbal_yaw_deg = gimbal_yaw_deg;
new_item.camera_action = camera_action;
return new_item;
}
inline void handle_action_err_exit(Action::Result result, const std::string&
message)
{
if (result != Action::Result::Success) {
std::cerr << ERROR_CONSOLE_TEXT << message << result <<
NORMAL_CONSOLE_TEXT << std::endl;
exit(EXIT_FAILURE);
}
}
inline void handle_mission_err_exit(Mission::Result result, const
std::string& message)
{
if (result != Mission::Result::Success) {
std::cerr << ERROR_CONSOLE_TEXT << message << result <<
NORMAL_CONSOLE_TEXT << std::endl;
exit(EXIT_FAILURE);
}
}
// Handles connection result
inline void handle_connection_err_exit(ConnectionResult result, const
std::string& message)
{
if (result != ConnectionResult::Success) {
std::cerr << ERROR_CONSOLE_TEXT << message << result <<
NORMAL_CONSOLE_TEXT << std::endl;
exit(EXIT_FAILURE);
}
}