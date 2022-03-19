package hust.doannd.websocket.controller;

import hust.doannd.websocket.model.Altsp;
import hust.doannd.websocket.model.Location;
import hust.doannd.websocket.model.Mission;
import hust.doannd.websocket.model.Port;
import hust.doannd.websocket.service.ExecuteCommand;
import hust.doannd.websocket.service.GetLocation;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;

@Controller
@CrossOrigin(origins = "*")
public class LocationController {
    @MessageMapping("/send")
    @SendTo("/chat/sendMessage")
    public Location sendMessage(Port port) {
        GetLocation.getLocations(port);

        if (GetLocation.locations.size() > GetLocation.index){
            return GetLocation.locations.get(GetLocation.index++);
        } else{
            return new Location();
        }
    }
    @MessageMapping("/getLocation")
    @SendTo("/chat/location")
    public Location getLocation(Port port) throws IOException {
        GetLocation.currentLocation.clear();
        GetLocation.clearCurrentLocation(port);
        ExecuteCommand.getLocation(port);
        while (GetLocation.currentLocation.size() == 0){
            GetLocation.getCurrentLocation(port);
        }
        return GetLocation.currentLocation.get(0);
    }

    @MessageMapping("/cleardata")
    public void clearData(Port port) throws IOException {
        GetLocation.locations.clear();
        GetLocation.index = 0;
        GetLocation.clearData(port);
    }

    @MessageMapping("/clearmission")
    public void clearMission(Port port) throws IOException {
        GetLocation.locations.clear();
        GetLocation.index = 0;
        GetLocation.clearData(port);
        GetLocation.clearMission(port.getStrPort());
    }

    @MessageMapping("/takeoffandland")
    public void takeoffAndLand(Port port) throws IOException {
        ExecuteCommand.takeoffAndLand(port);
    }

    @MessageMapping("/mission")
    public void flyMission(Port port) throws IOException {
        ExecuteCommand.flyMission(port);
    }

    @MessageMapping("/missionnorl")
    public void flyMissionNorl(Port port) throws IOException {
        ExecuteCommand.flyMissionNorl(port);
    }

    @MessageMapping("/uploadmission")
    public void uploadMisson(Mission mission) throws Exception {
        GetLocation.uploadMission(mission.getStrMission(), mission.getStrPort());
    }

    @MessageMapping("/uploadaltsp")
    public void uploadAltsp(Altsp altsp) throws Exception {
        GetLocation.uploadAltsp(altsp.getStrAltsp(), altsp.getStrPort());
    }
}