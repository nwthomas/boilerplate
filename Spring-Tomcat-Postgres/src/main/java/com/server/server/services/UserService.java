package com.server.server.services;

import com.server.server.model.User;

import java.util.ArrayList;

public interface UserService
{
	ArrayList<User> findAll();

	void delete(long id);
}
