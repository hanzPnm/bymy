package com.bymy.shops.service;

import com.bymy.shops.repository.FileModelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileModelService {
    @Autowired
    private FileModelRepository fileModelRepository;

}
