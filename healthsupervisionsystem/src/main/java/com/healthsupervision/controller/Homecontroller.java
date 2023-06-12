package com.healthsupervision.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthsupervision.pojos.User;
import com.healthsupervision.service.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/")
public class Homecontroller {
	@Autowired
	UserService userservice;

	@PostMapping("/register")
	public String createUser(@RequestBody User user) {
		return userservice.registerUser(user);
	}
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		User oldUser= userservice.login(user.getEmail());
		if(oldUser!=null && user.getPassword().equals(oldUser.getPassword()))
			return oldUser;
		else return null;
	}
}
