package hust.doannd.websocket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hust.doannd.websocket.model.Drone;

@Repository
public interface DroneRepository extends JpaRepository<Drone, Long>{
	
	List<Drone> findAll();
	
}
