package com.ChefsWay.ChefsWay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ChefsWay.ChefsWay.controller.entities.Post;

public interface Myrepository extends JpaRepository<Post,Long>{

}
