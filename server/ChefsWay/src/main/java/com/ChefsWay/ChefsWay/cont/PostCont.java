package com.ChefsWay.ChefsWay.cont;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ChefsWay.ChefsWay.controller.entities.Post;
import com.ChefsWay.ChefsWay.repository.Myrepository;

@RestController

public class PostCont {
	
	@Autowired
	private Myrepository myrespository;
	
	@PostMapping("/post")
	Post Newpost(@RequestBody Post Newpost) {
		return myrespository.save(Newpost);
		
	}
	
	@GetMapping("/posts")
	List<Post> getAllPosts(){
		return myrespository.findAll();
	}
	
	
	

}
