package com.chefsway.chefswayUserProfile.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
public class User {
	
	@Id
	@GeneratedValue
	private Long id;
	@NotBlank(message="Enter your name")
	private String name;
	@NotBlank(message="Enter your email")
	@Email(message="Invalid email")
	private String email;
	private String gender;
	@NotNull(message="Are you a chef?")
	private String isChef;
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
	@JsonFormat(pattern = "MM/dd/yyyy")
	@NotBlank(message="Enter your Date of Birth")
	private String dob;
	@Size(min=8,  message="Password must be greater than 8 characters")
	@NotNull(message="Enter password")
	private String password;
	
	public User() {
		
	}
	
	public User(String name,String email, String gender,String isChef, String dob, String password ) {
		this.name=name;
		this.email=email;
		this.gender=gender;
		this.isChef=isChef;
		this.dob=dob;
		this.password=password;
		
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {

		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getIsChef() {
		return isChef;
	}
	public void setIsChef(String isChef) {
		this.isChef = isChef;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password+"00";
	}
	
	

}
