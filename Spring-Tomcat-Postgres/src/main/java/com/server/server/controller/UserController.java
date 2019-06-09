package com.server.server.controller;

import com.server.server.ServerApplication;
import com.server.server.exception.ResourceNotFoundException;
import com.server.server.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController
{
	// /users/all
	@GetMapping(value = "/all", produces = {"application/json"})
	public ResponseEntity<?> getallUsers()
	{
		return new ResponseEntity<>(ServerApplication.ourUserList.userList, HttpStatus.OK);
	}

	// /users/{id}
	@GetMapping(value = "/{id}", produces = {"application/json"})
	public ResponseEntity<?> getSingleUser(@PathVariable int id)
	{
		User rtnUser = ServerApplication.ourUserList.findUser(u -> u.getId() == id);
		if (rtnUser == null)
		{
			throw new ResourceNotFoundException("User with id " + id + " is not found.");
		}
		else
		{
			return new ResponseEntity<>(rtnUser, HttpStatus.OK);
		}
	}

	// /users/{email}
	@GetMapping(value = "/{email", produces = {"application/json"})
	public ResponseEntity<?> getUserByEmail(@PathVariable String email)
	{
		User rtnUser = ServerApplication.ourUserList.findUser(u -> u.getEmail() == email);
		if (rtnUser == null)
		{
			throw new ResourceNotFoundException("User with email " + email + " is not found.");
		}
		else
		{
			return new ResponseEntity<>(rtnUser, HttpStatus.OK);
		}
	}


	// /users/{phone}
	@GetMapping(value = "/{phone}", produces = {"application/json"})
	public ResponseEntity<?> getUserByPhone(@PathVariable String phone)
	{
		User rtnUser = ServerApplication.ourUserList.findUser(u -> u.getPhone() == phone);
		if (rtnUser == null)
		{
			throw new ResourceNotFoundException("User with phone " + phone + " is not found.");
		}
		else
		{
			return new ResponseEntity<>(rtnUser, HttpStatus.OK);
		}
	}
}