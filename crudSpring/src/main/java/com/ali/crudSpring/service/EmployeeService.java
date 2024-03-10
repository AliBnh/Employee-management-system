package com.ali.crudSpring.service;

import com.ali.crudSpring.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);

//    public List<Employee> getEmployeesByFirstName(String firstName) ;

    public List<Employee> searchEmployees(String searchTerm) ;

    }