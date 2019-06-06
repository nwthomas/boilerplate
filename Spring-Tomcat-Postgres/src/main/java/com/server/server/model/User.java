package com.server.server.model;

import java.util.concurrent.atomic.AtomicLong;

public class User
{
	private static final AtomicLong counter = new AtomicLong();
	private long id;
	private String fname;
	private String lname;
	private String email;
	private String phone;

	public User(String fname, String lname, String email, String phone)
	{
		this.id = counter.incrementAndGet();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.phone = phone;
	}

	public User(User toClone)
	{
		this.id = toClone.getId();
		this.fname = toClone.getFname();
		this.lname = toClone.getLname();
		this.email = toClone.getEmail();
		this.phone = toClone.getPhone();
	}

	public long getId()
	{
		return id;
	}

	public String getFname()
	{
		return fname;
	}

	public void setFname(String fname)
	{
		this.fname = fname;
	}

	public String getLname()
	{
		return lname;
	}

	public void setLname(String lname)
	{
		this.lname = lname;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPhone()
	{
		return phone;
	}

	public void setPhone(String phone)
	{
		this.phone = phone;
	}
}
