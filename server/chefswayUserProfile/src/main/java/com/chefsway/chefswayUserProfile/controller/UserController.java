package com.chefsway.chefswayUserProfile.controller;


//import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;

import com.chefsway.chefswayUserProfile.exception.UserNotFoundException;
//import com.chefsway.chefswayUserProfile.model.Profilepic;
import com.chefsway.chefswayUserProfile.model.User;
import com.chefsway.chefswayUserProfile.repository.UserRepository;
//import com.chefsway.chefswayUserProfile.service.Service;

@RestController
@CrossOrigin("http://localhost:3000/")
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
//	@PostMapping(value={"/user"}, consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
//	User newUser(@RequestPart("user") @Valid User newUser,
//			@RequestPart("userImage")MultipartFile file) {
//		
//		
//		
//		try {
//			Profilepic newPp=uploadImage(file);
//			newUser.setPp(newPp);
//			return repo.save(newUser);
//		}catch(Exception e) {
//			System.out.println(e.getMessage());
//			return null;
//		}
//		
//	}
//	
//	public Profilepic uploadImage(MultipartFile file) throws IOException {
//		Profilepic Pp =new Profilepic(
//		file.getOriginalFilename(),
//		file.getContentType(),
//		file.getBytes()
//		);
//		return Pp;
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
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser,@PathVariable Long id) {
			return repo.findById(id)
					.map(user -> {
						user.setName(newUser.getName());
						user.setEmail(newUser.getEmail());
						user.setGender(newUser.getGender());
						user.setIsChef(newUser.getIsChef());
						user.setDob(newUser.getDob());
						user.setPassword(newUser.getPassword());
						
						return repo.save(user);
					}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@DeleteMapping("user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!repo.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		repo.deleteById(id);
		return "User with id "+id+" has been deleted successfully";
	}
	

}
