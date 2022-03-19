package hust.doannd.websocket.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import hust.doannd.websocket.model.Drone;
import hust.doannd.websocket.repository.DroneRepository;
import hust.doannd.websocket.service.DroneManageService;

@Service
public class DroneManageServiceImpl implements DroneManageService {

	private DroneRepository droneRepository;

	public DroneManageServiceImpl(DroneRepository droneRepository) {
		this.droneRepository = droneRepository;
	}

	@Override
	public List<Drone> getAll() {
		return droneRepository.findAll();
	}

	@Override
	public Drone save(Drone drone) {
		// TODO Auto-generated method stub
		return droneRepository.save(drone);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		droneRepository.deleteById(id);
	}

}
