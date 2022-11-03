package com.chefsway.chefswayUserProfile.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="profilePics")
public class Profilepic {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private String type;	
	
	@Lob
	@Column(name="ProfilePic", length=Integer.MAX_VALUE, nullable=true)
	private byte[] picByte;
	
	public Profilepic() {
		
	}
	
	public Profilepic(String name,String type,byte[] picByte) {
		this.name=name;
		this.type=type;
		this.picByte=picByte;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}
	

}
