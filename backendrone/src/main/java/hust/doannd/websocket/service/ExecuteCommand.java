package hust.doannd.websocket.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import hust.doannd.websocket.model.Port;

public class ExecuteCommand {

    public static void getLocation(Port port) throws IOException {
        List<String> commands = new ArrayList<>();
        commands.add("./takeoff_and_land");
        commands.add(port.getStrPort());

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 
        ProcessBuilder pb = new ProcessBuilder(commands);

        pb.directory(new File("/home/lequyetanh/drone/drone_data/command_drone" + stringPort + "/get_location/build"));
        Process process = pb.start();

        BufferedReader stdInput = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String s = null;
        while ((s = stdInput.readLine()) != null) {
        }

    }
    
    public static void takeoffAndLand(Port port) throws IOException {
        List<String> commands = new ArrayList<>();
        commands.add("./takeoff_and_land"); 
        commands.add(port.getStrPort()); 

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 
        ProcessBuilder pb = new ProcessBuilder(commands);
        pb.directory(new File("/home/lequyetanh/drone/drone_data/command_drone" + stringPort + "/takeoff_and_land/build"));
        Process process = pb.start();
        BufferedReader stdInput = new BufferedReader(new
                InputStreamReader(process.getInputStream()));
        String s = null;
        while ((s = stdInput.readLine()) != null) {
        }
        
    }

    public static void flyMission(Port port) throws IOException {
  
        List<String> commands = new ArrayList<>();
        commands.add("./fly_mission"); 
        commands.add(port.getStrPort()); 

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 

        ProcessBuilder pb = new ProcessBuilder(commands);

        pb.directory(new File("/home/lequyetanh/drone/drone_data/command_drone" + stringPort + "/fly_mission_np/build"));

        Process process = pb.start();

        BufferedReader stdInput = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String s = null;
        while ((s = stdInput.readLine()) != null) {
            // System.out.println(s);
        }
    }

    public static void flyMissionNorl(Port port) throws IOException {
   
        List<String> commands = new ArrayList<>();
        commands.add("./fly_mission"); 
        commands.add(port.getStrPort()); 

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 



        ProcessBuilder pb = new ProcessBuilder(commands);

        pb.directory(new File("/home/lequyetanh/drone/drone_data/command_drone" + stringPort + "/fly_mission_norl/build"));

        Process process = pb.start();

        BufferedReader stdInput = new BufferedReader(new
                InputStreamReader(process.getInputStream()));
        String s = null;
        while ((s = stdInput.readLine()) != null) {
        }
    }

}

