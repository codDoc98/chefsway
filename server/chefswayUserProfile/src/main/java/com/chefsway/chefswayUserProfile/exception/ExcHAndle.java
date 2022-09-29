package com.chefsway.chefswayUserProfile.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;


@RestControllerAdvice
public class ExcHAndle {

	//	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	
	public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException e){
		Map<String, String> errorMap=new HashMap<>();
		e.getBindingResult().getFieldErrors	().forEach(error ->{
			errorMap.put(error.getField(), error.getDefaultMessage());
		});
		return errorMap;
	}
	@ResponseBody
	@ExceptionHandler(UserNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String> exceptionHandler(UserNotFoundException e){
		Map<String, String> errorMap=new HashMap<>();
			errorMap.put("errorMessage",e.getMessage());
		
		return errorMap;
	}
	
	
}
