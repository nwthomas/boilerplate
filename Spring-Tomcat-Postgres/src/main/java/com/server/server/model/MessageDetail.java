package com.server.server.model;

import java.io.Serializable;

public class MessageDetail implements Serializable
{
	private String text;
	private int priority;
	private boolean secret;
	private String date;
	private String parameters;

	public MessageDetail()
	{

	}

	public MessageDetail(String text, int priority, boolean secret, String date, String parameters)
	{
		this.text = text;
		this.priority = priority;
		this.secret = secret;
		this.date = date;
		this.parameters = parameters;
	}

	public String getText()
	{
		return text;
	}

	public void setText(String text)
	{
		this.text = text;
	}

	public int getPriority()
	{
		return priority;
	}

	public void setPriority(int priority)
	{
		this.priority = priority;
	}

	public boolean isSecret()
	{
		return secret;
	}

	public void setSecret(boolean secret)
	{
		this.secret = secret;
	}

	public String getDate()
	{
		return date;
	}

	public void setDate(String date)
	{
		this.date = date;
	}

	public String getParameters()
	{
		return parameters;
	}

	public void setParameters(String parameters)
	{
		this.parameters = parameters;
	}

	@Override
	public String toString()
	{
		return "MessageDetail{" + "text='" + text + '\'' + ", priority=" + priority + ", secret=" + secret + ", date='" + date + '\'' + ", parameters='" + parameters + '\'' + '}';
	}
}
