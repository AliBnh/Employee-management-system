import React from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
const Navbar = () => {
    
  return (
    <div className='bg-gray-700'>
        <div className='h-16 flex items-center px-8 justify-between'>
            <Link to={"/"}>
                <p className='text-white font-bold'>Employee Management System</p>
            </Link>
            <div className='flex '>
                <p className='text-white mx-8'>
                    <Link to={"/addEmployee"} >
                        Add Employee
                    </Link>
                </p>
                <p className='text-white'>
                    <Link to={"/"} >
                        View Employees
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar