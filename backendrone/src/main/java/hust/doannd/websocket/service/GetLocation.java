package hust.doannd.websocket.service;

import hust.doannd.websocket.model.Location;
import hust.doannd.websocket.model.Port;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class GetLocation {

    public static List<Location> locations = new ArrayList<>();
    public static int index = 0;

    private static Location createLocation(String[] metadata, String port) {
        double alt = Double.parseDouble(metadata[0]);
        double lat = Double.parseDouble(metadata[1]);
        double lon = Double.parseDouble(metadata[2]);
        double battery = Double.parseDouble(metadata[3]);
        return new Location(alt, lat, lon, battery, port);
    }

    public static List<Location> currentLocation = new ArrayList<>();

    public static void getCurrentLocation(Port port) {

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 
        String textFile = "/home/lequyetanh/drone/drone_data/data" + stringPort + "/location";
        BufferedReader br = null;
        String line = "";
        String textSplitBy = ",";

        try {
            br = new BufferedReader(new FileReader(textFile));
            while ((line = br.readLine()) != null) {
                String[] attributes = line.split(textSplitBy);
                if(attributes.length == 4){
                    if(attributes[0] != "" && attributes[1] != "" && attributes[2] != "" && attributes[3] != ""){
                        Location location = createLocation(attributes, port.getStrPort());
                        currentLocation.add(location);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static void clearCurrentLocation(Port port) throws IOException {

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 

        FileWriter fwI = new FileWriter("/home/lequyetanh/drone/drone_data/data" + stringPort + "/location", false);
        PrintWriter pwI = new PrintWriter(fwI, false);
        pwI.flush();
        pwI.close();
        fwI.close();
        System.out.println("Clear current location");
    }

    public static void getLocations(Port port) {

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 

        String textFile = "/home/lequyetanh/drone/drone_data/data" + stringPort + "/output";
        BufferedReader br = null;
        String line = "";
        String textSplitBy = ",";

        locations.clear();

        try {
            br = new BufferedReader(new FileReader(textFile));
            while ((line = br.readLine()) != null) {
                String[] attributes = line.split(textSplitBy);
                System.out.println(attributes);
                if(attributes.length == 4){
                    if(attributes[0] != "" && attributes[1] != "" && attributes[2] != "" && attributes[3] != ""){
                        Location location = createLocation(attributes, port.getStrPort());
                        locations.add(location);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static void clearData(Port port) throws IOException {

        char charPort = port.getStrPort().charAt(port.getStrPort().length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 

        FileWriter fwO = new FileWriter("/home/lequyetanh/drone/drone_data/data" + stringPort + "/output", false);
        PrintWriter pwO = new PrintWriter(fwO, false);
        pwO.flush();
        pwO.close();
        fwO.close();
        System.out.println("Clear data output");
    }

    public static void clearMission(String port) throws IOException {

        char charPort = port.charAt(port.length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 
        FileWriter fwI = new FileWriter("/home/lequyetanh/drone/drone_data/data" + stringPort + "/input", false);
        PrintWriter pwI = new PrintWriter(fwI, false);
        pwI.flush();
        pwI.close();
        fwI.close();
        System.out.println("Clear mission");
    }

    public static void uploadMission(String mission, String port) throws Exception {

        char charPort = port.charAt(port.length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 

        clearMission(port);
        File file = new File("/home/lequyetanh/drone/drone_data/data" + stringPort + "/input");
        FileWriter fr = new FileWriter(file, true);
        fr.write(mission);
        fr.close();
        System.out.println("Update mission");
    }

    public static void clearAltsp(String port) throws IOException {

        char charPort = port.charAt(port.length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 
        FileWriter fwI = new FileWriter("/home/lequyetanh/drone/drone_data/data" + stringPort + "/altsp", false);
        PrintWriter pwI = new PrintWriter(fwI, false);
        pwI.flush();
        pwI.close();
        fwI.close();
        System.out.println("Clear altitude and speed");
    }

    public static void uploadAltsp(String data, String port) throws Exception {

        char charPort = port.charAt(port.length() - 1);
        int numPort = charPort - 47;
        String stringPort = Integer.toString(numPort); 

        clearAltsp(port);
        File file = new File("/home/lequyetanh/drone/drone_data/data" + stringPort + "/altsp");
        FileWriter fr = new FileWriter(file, true);
        fr.write(data);
        fr.close();
        System.out.println("Update Altitude & Speed");
    }
}

