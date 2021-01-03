package com.bymy.shops.repository;

import com.bymy.shops.model.FileModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileModelRepository extends JpaRepository<FileModel, Long>{
    
}
