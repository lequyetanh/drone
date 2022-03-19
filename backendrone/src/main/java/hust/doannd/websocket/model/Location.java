package hust.doannd.websocket.model;

public class Location {
    private double alt;
    private double lat;
    private double lon;
    private double battery;
    private String port;

    public Location() {
    }

    public Location(double alt, double lat, double lon, double batery, String port) {
        this.alt = alt;
        this.lat = lat;
        this.lon = lon;
        this.battery = batery;
        this.port = port;
    }

    public double getAlt() {
        return alt;
    }

    public void setAlt(double alt) {
        this.alt = alt;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

	public double getBattery() {
		return battery;
	}

	public void setBattery(double battery) {
		this.battery = battery;
	}

    public String getPort() {
		return port;
	}

	public void setPort(String port) {
		this.port = port;
	}

}
