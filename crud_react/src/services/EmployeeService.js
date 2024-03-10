import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    searchEmployee(searchTerm){
        return axios.get(EMPLOYEE_API_BASE_URL + '/search/' + searchTerm);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    

}
export default new EmployeeService();