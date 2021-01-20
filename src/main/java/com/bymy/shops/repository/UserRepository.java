package com.bymy.shops.repository;

import com.bymy.shops.model.CustomUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<CustomUser,Integer>{

	CustomUser findByUserName(String username);
    
}
