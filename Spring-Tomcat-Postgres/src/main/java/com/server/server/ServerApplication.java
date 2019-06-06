package com.server.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

@SpringBootApplication
public class ServerApplication
{

	public static UserList ourUserList;

	public static void main(String[] args)
	{
		ourUserList = new UserList();
		ApplicationContext ctx = SpringApplication.run(ServerApplication.class, args);

		DispatcherServlet dispatcherServlet = (DispatcherServlet)ctx.getBean("dispatcherServlet");

		dispatcherServlet.setThrowExceptionIfNoHandlerFound(true);
	}

}
