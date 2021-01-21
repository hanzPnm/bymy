package com.bymy.shops.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import com.bymy.shops.model.CustomRole;
import com.bymy.shops.model.CustomUser;
import com.bymy.shops.model.UserDTO;
import com.bymy.shops.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired  
    private UserRepository userRepository;

    @Autowired
	private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<CustomUser> user = userRepository.findByUserName(username);
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        if(user.isPresent()){
            grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_"+user.get().getRole().toString()));        
            return new org.springframework.security.core.userdetails.User(user.get().getUserName(),user.get().getPassword(),grantedAuthorities);
        }
        else{
            throw new UsernameNotFoundException(username);
        }
    }

	public CustomUser addUser(UserDTO userDTO) throws Exception {
        Optional<CustomUser> user = userRepository.findByUserName(userDTO.getUserName());
        if(!user.isPresent()){
            CustomUser customUser = new CustomUser(userDTO.getUserName(),userDTO.getEmail());
            customUser.setRole(CustomRole.USER);
            customUser.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            return userRepository.save(customUser);
        }else{
            throw new Exception("error when creating user "+userDTO.getUserName());
        }
	}
    
}
