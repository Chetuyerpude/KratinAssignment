package com.healthsupervision.service;

import java.util.List;

import com.healthsupervision.pojos.HealthData;
import com.healthsupervision.pojos.User;



public interface UserService {

	public String registerUser(User user);

	public User authenticateUser(String email, String password);
	public List<User> getAllUsers();
	public String addData(HealthData data,Long id);
	public List<HealthData> myheathHistory(Long id);
	public User login(String email);
	public String deleteHealthdata(Long id);
}
