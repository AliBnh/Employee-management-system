import './App.css';
import Navbar from './components/Navbar';
import AddEmployee from './pages/AddEmployee';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import UpdateEmployee from './pages/UpdateEmployee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='m-16 '>
          <Routes>
            <Route index element={<EmployeeList/>}/>
            <Route path='/' element={<EmployeeList/>}/>
            <Route path='/employeeList' element={<EmployeeList/>}/>
            <Route path='/addEmployee' element={<AddEmployee/>}/>
            <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
