package com.server.server.services;

import com.server.server.model.User;
import com.server.server.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;

@Service(value = "userService")
public class UserServiceImpl implements UserService
{
	@Autowired
	private UserRepository userRepos;

	@Override
	public ArrayList<User> findAll()
	{
		ArrayList<User> list = new ArrayList<>();
		userRepos.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(long id)
	{
		if (userRepos.findById(id).isPresent())
		{
			userRepos.deleteById(id);
		}
		else
		{
			throw new EntityNotFoundException(Long.toString(id));
		}
	}
}
