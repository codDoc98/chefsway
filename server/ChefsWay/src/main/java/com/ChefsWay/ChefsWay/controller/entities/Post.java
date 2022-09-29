package com.ChefsWay.ChefsWay.controller.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity

public class Post {
	
	@Id
	@GeneratedValue
	
	private long postid;
	private String RecipeName;
	private String Type;
	private String[] ingrediants;
	private String[] method;
	
	public long getPostid() {
		return postid;
	}
	public void setPostid(long postid) {
		this.postid = postid;
	}
	public String getRecipeName() {
		return RecipeName;
	}
	public void setRecipeName( String RecipeName) {
		this.RecipeName = RecipeName;
	}
	public String getType() {
		return Type;
	}
	public void setType( String Type) {
		this.Type = Type;
	}
	public String[] getIngrediants() {
		return ingrediants;
	}
	public void setIngrediants(String[] ingrediants) {
		this.ingrediants = ingrediants;
	}
	public String[] getMethod() {
		return method;
	}
	public void setMethod(String[] method) {
		this.method = method;
	}
	
	

}
