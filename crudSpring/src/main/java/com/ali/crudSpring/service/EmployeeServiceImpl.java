package com.ali.crudSpring.service;

import com.ali.crudSpring.entity.EmployeeEntity;
import com.ali.crudSpring.model.Employee;
import com.ali.crudSpring.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private final EmployeeRepository employeeRepository;


    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities
                = employeeRepository.findAll();

        List<Employee> employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()))
                .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).get();
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());

        employeeRepository.save(employeeEntity);
        return employee;
    }

//    @Override
//    public List<Employee> getEmployeesByFirstName(String firstName) {
//        List<EmployeeEntity> employeeEntities
//                = employeeRepository.findByFirstName(firstName);
//
//        List<Employee> employees = employeeEntities
//                .stream()
//                .map(emp -> new Employee(
//                        emp.getId(),
//                        emp.getFirstName(),
//                        emp.getLastName(),
//                        emp.getEmailId()))
//                .collect(Collectors.toList());
//        return employees;
//    }


    @Override
    public List<Employee> searchEmployees(String searchTerm) {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAllByFirstNameContainingOrLastNameContainingOrEmailIdContaining(
                searchTerm.toLowerCase(), searchTerm.toLowerCase(), searchTerm.toLowerCase());

        return employeeEntities.stream()
                .map(emp -> new Employee(emp.getId(), emp.getFirstName(), emp.getLastName(), emp.getEmailId()))
                .collect(Collectors.toList());
    }

}