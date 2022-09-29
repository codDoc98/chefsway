package com.chefsway.chefswayUserProfile.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chefsway.chefswayUserProfile.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
