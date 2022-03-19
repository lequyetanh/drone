package hust.doannd.websocket.model;

public class Mission {
    private String strMission;
    private String strPort;

    public Mission() {
    }

    public Mission(String strMission, String strPort) {
        this.strMission = strMission;
        this.strPort = strPort;
    }

    public String getStrMission() {
        return strMission;
    }

    public String getStrPort() {
        return strPort;
    }

    public void setStrMission(String strMission) {
        this.strMission = strMission;
    }

    public void setStrPort(String strPort) {
        this.strPort = strPort;
    }
}
