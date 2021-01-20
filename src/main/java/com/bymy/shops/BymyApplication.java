package com.bymy.shops;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import com.bymy.shops.model.CustomUser;
import com.bymy.shops.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BymyApplication {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostConstruct
	public void initUsers(){
		if(userRepository.count()==0){			
			List<CustomUser> users = Stream.of(
				new CustomUser(101,"admin",passwordEncoder.encode("admin"),"admin@gmail.com"),
				new CustomUser(102,"manager","manager","manager@gmail.com"),
				new CustomUser(103,"user","user","user@gmail.com")
				).collect(Collectors.toList());
			userRepository.saveAll(users);
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(BymyApplication.class, args);
	}

}
