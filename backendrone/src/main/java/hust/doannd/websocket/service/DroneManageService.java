package hust.doannd.websocket.service;

import java.util.List;

import hust.doannd.websocket.model.Drone;

public interface DroneManageService {
	
	List<Drone> getAll();

	Drone save(Drone drone);
	
	void delete(Long id);
}
