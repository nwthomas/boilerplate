package com.server.server;

import com.server.server.model.User;

import java.util.ArrayList;

public class UserList
{
	public ArrayList<User> userList = new ArrayList<>();

	public UserList()
	{
		userList.add(new User("Nathan", "Thomas", "useremail@gmail.com", "(707) 123-4567"));
		userList.add(new User("The", "Dude", "thedude@gmail.com", "(708) 765-4321"));
	}

	public User findUser(CheckUser tester)
	{
		for (User u : userList)
		{
			if (tester.test(u))
			{
				return u;
			}
		}
		return null;
	}

	public ArrayList<User> findUsers(CheckUser tester)
	{
		ArrayList<User> tempUserList = new ArrayList<>();

		for (User u : userList)
		{
			if (tester.test(u))
			{
				tempUserList.add(u);
			}
		}

		return tempUserList;
	}
}
