import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "../components/Employee";
const EmployeeList = () => {

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await EmployeeService.getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);   

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };
  const [searchTerm, setSearchTerm] = useState("");
  const  handleChange = (e)=>{
    setSearchTerm(e.target.value) ;
  }

  const searchEmployee = (searchTerm) => {
    if(searchTerm === "")  {fetchData(); return;}
    EmployeeService.searchEmployee(searchTerm).then((res) => {
      setEmployees(res.data);
      setSearchTerm("");
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-flow-row gap-0 align-middle items-center">

        <div className=" h-14 w-full my-4">
        <input
          type="text"
          name="searchTerm"
          placeholder=""
          onChange={(e)=>handleChange(e)}
          className="h-10 w-48 border mt-2 px-2 py-2">
        </input>
        <button
            onClick={() => searchEmployee(searchTerm)}
            className="rounded bg-slate-600 text-white px-6 py-2 mb-16 font-semibold hover:bg-slate-700">
             Search
          </button>
        </div>
      </div>
      <div className="flex shadow border-b mt-8">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}/>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;