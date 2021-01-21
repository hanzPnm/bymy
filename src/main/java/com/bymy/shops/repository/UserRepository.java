package com.bymy.shops.repository;

import java.util.Optional;

import com.bymy.shops.model.CustomUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<CustomUser,Integer>{

	Optional<CustomUser> findByUserName(String username);
    
}
