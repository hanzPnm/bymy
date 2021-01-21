package com.bymy.shops.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CustomUser {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column
    private String userName;
    
    @Column
    @JsonIgnore
    private String password;
    
    @Column
    private String email;
    
    @Column
    @Enumerated(EnumType.STRING)
    private CustomRole role;

    public CustomUser(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
    
}
