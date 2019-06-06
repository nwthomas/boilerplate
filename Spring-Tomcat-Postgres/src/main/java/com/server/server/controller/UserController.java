package com.server.server.controller;

import com.server.server.ServerApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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

	// /users/{letter}

	// /users/{email}

	// /users/{phone}
}
