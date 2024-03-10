package com.ali.crudSpring.repository;

import com.ali.crudSpring.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {

    List<EmployeeEntity> findByFirstName(String firstName);

    List<EmployeeEntity> findAllByFirstNameContainingOrLastNameContainingOrEmailIdContaining(String searchTerm,String searchTerm2,String searchTerm3);
}

