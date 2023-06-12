package com.healthsupervision.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthsupervision.pojos.HealthData;
import com.healthsupervision.pojos.User;
import com.healthsupervision.repo.Healthdatarepo;
import com.healthsupervision.repo.UserRepo;
@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepo userrepo;
	@Autowired
	Healthdatarepo hrepo;

	@Override
	public String registerUser(User user) {
		// TODO Auto-generated method stub
		userrepo.save(user);

		return "User added successfully";
	}

	@Override
	public User authenticateUser(String email, String password) {
		User user= userrepo.AuthenticateUser(email, password);
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> ulist=userrepo.findAll();
		return ulist;
	}

	@Override
	public String addData(HealthData data, Long id) {
		// TODO Auto-generated method stub
		User user=userrepo.findById(id).orElseThrow(()->new RuntimeException("user not found"));
		data.setUser(user);
		hrepo.save(data);
		return "Health details added successfully";
		
	}

	@Override
	public List<HealthData> myheathHistory(Long id) {
		// TODO Auto-generated method stub
		User user =userrepo.findById(id).orElseThrow(()->new RuntimeException("user not found"));
		List<HealthData>heathHistory=hrepo.findByUser(user);
		return heathHistory;
	}

	@Override
	public User login(String email) {
		// TODO Auto-generated method stub
		return userrepo.findByEmail(email);
	}

	@Override
	public String deleteHealthdata(Long id) {
		// TODO Auto-generated method stub
		hrepo.deleteById(id);
		return "Healthdata Deleted Successfully";
	}
	

	

}
