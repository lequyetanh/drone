package hust.doannd.websocket.model;

public class Altsp {
    private String strAltsp;
    private String strPort;

    public Altsp() {
    }

    public Altsp(String strAltsp, String strPort) {
        this.strAltsp = strAltsp;
        this.strPort = strPort;
    }

    public String getStrAltsp() {
        return strAltsp;
    }

    public String getStrPort() {
        return strPort;
    }

    public void setStrAltsp(String strAltsp) {
        this.strAltsp = strAltsp;
    }

    public void setStrPort(String strPort) {
        this.strPort = strPort;
    }
}
