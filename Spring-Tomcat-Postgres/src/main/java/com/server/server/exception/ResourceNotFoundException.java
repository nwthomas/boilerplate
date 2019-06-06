package com.server.server.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException
{
	private static final long serialVersionID = 1L;

	public ResourceNotFoundException(String message)
	{
		super(message);
	}

	public ResourceNotFoundException(String message, Throwable cause)
	{
		super(message, cause);
	}
}
