package hust.doannd.websocket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import hust.doannd.websocket.model.Drone;
import hust.doannd.websocket.service.DroneManageService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DroneManageController {

	@Autowired
	DroneManageService droneManageService;

	@GetMapping("/drone")
	public List<Drone> getUsers() {
		return droneManageService.getAll();

	}

	@PostMapping("/drone")
	public Drone addDrone(@RequestBody Drone drone) {
		return droneManageService.save(drone);

	}

	@DeleteMapping("/drone/{id}")
	public void addDrone(@PathVariable Long id) {
		droneManageService.delete(id);

	}

}
