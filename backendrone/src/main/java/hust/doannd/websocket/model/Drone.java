package hust.doannd.websocket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_drone")
public class Drone {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "drone_name")
	private String droneName;

	@Column(name = "serial_no")
	private String serialNo;

	@Column(name = "manufacturer_id")
	private Long manufacturerId;

	@Column(name = "max_weight_package_delivery")
	private Long maxWeightPackageDelivery;

	@Column(name = "max_speed")
	private Long maxSpeed;

	@Column(name = "max_height")
	private Long maxHeight;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDroneName() {
		return droneName;
	}

	public void setDroneName(String droneName) {
		this.droneName = droneName;
	}

	public String getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}

	public Long getManufacturerId() {
		return manufacturerId;
	}

	public void setManufacturerId(Long manufacturerId) {
		this.manufacturerId = manufacturerId;
	}

	public Long getMaxWeightPackageDelivery() {
		return maxWeightPackageDelivery;
	}

	public void setMaxWeightPackageDelivery(Long maxWeightPackageDelivery) {
		this.maxWeightPackageDelivery = maxWeightPackageDelivery;
	}

	public Long getMaxSpeed() {
		return maxSpeed;
	}

	public void setMaxSpeed(Long maxSpeed) {
		this.maxSpeed = maxSpeed;
	}

	public Long getMaxHeight() {
		return maxHeight;
	}

	public void setMaxHeight(Long maxHeight) {
		this.maxHeight = maxHeight;
	}

	@Override
	public String toString() {
		return "Drone [id=" + id + ", droneName=" + droneName + ", serialNo=" + serialNo + ", manufacturerId="
				+ manufacturerId + ", maxWeightPackageDelivery=" + maxWeightPackageDelivery + ", maxSpeed=" + maxSpeed
				+ ", maxHeight=" + maxHeight + "]";
	}

	// standard constructors / setters / getters / toString
}