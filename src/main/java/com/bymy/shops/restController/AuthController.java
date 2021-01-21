package com.bymy.shops.restController;

import com.bymy.shops.model.AuthRequest;
import com.bymy.shops.model.AuthResponse;
import com.bymy.shops.model.UserDTO;
import com.bymy.shops.service.CustomUserDetailsService;
import com.bymy.shops.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @GetMapping("/authenticate")
    public ResponseEntity generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try{

            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
                );
                String jwt = jwtUtil.generateToken(authRequest.getUserName());
                return ResponseEntity.ok(new AuthResponse(jwt));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();             
        }
    }

    @PostMapping("/create")
    public ResponseEntity createUser(@RequestBody UserDTO customUser) throws Exception {
        try{
            customUserDetailsService.addUser(customUser);            
            return ResponseEntity.ok().build();
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());             
        }
    }

}
