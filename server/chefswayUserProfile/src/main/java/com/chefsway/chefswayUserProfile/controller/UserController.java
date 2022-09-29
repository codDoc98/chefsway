package com.chefsway.chefswayUserProfile.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chefsway.chefswayUserProfile.exception.UserNotFoundException;
import com.chefsway.chefswayUserProfile.model.User;
import com.chefsway.chefswayUserProfile.repository.UserRepository;
//import com.chefsway.chefswayUserProfile.service.Service;

@RestController
@CrossOrigin("http://localhost:3000/  ")
public class UserController {
	
	
	//private Service service;
	@Autowired
	private UserRepository repo;
	
//	@PostMapping("/user")
//	public ResponseEntity<User> createUser(@RequestBody @Valid User newUser) {
//		
//		return new ResponseEntity<>(service.createUser(newUser), HttpStatus.CREATED); 
//		
//	}
	@PostMapping("/user")
	User newUser(@RequestBody @Valid User newUser) {
		
		return repo.save(newUser);
		
	}
	
	@GetMapping("/users")
	List<User> getAllUsers(){
		return repo.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		return repo.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	

}
