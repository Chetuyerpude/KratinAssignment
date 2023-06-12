package com.healthsupervision.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthsupervision.pojos.HealthData;
import com.healthsupervision.pojos.User;
import com.healthsupervision.service.UserService;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userservice;

	

	@GetMapping("/getallusers")
	public List<User>getAllUsers(){
		List<User>listOfusers= userservice.getAllUsers();
		return listOfusers;
	}

	@PostMapping("/addhealthdetails/{id}")
	public String addHealthData(@RequestBody HealthData data,@PathVariable Long id) {
		return userservice.addData(data,id);
	}
	
	@GetMapping("/gethealthhistory/{id}")
	public List<HealthData> getHistory(@PathVariable Long id){
		return userservice.myheathHistory(id);
	}
	@DeleteMapping("/deletedata/{id}")
	public String deleteData(@PathVariable Long id) {
		return userservice.deleteHealthdata(id);
	}
}
