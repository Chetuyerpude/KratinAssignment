package com.healthsupervision.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthsupervision.pojos.HealthData;
import com.healthsupervision.pojos.User;
import java.util.List;

public interface Healthdatarepo extends JpaRepository<HealthData, Long> {
	List<HealthData> findByUser(User user);

}
