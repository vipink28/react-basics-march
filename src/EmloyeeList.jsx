import { useState } from "react";
import EmployeeRow from "./EmployeeRow";

function EmployeeList(){

    const employeeData = [
        {id: 1, name: "Vipin", gender: "male", designation: "Trainer", salary: 25000},
        {id: 2, name: "Ishu", gender: "female", designation: "Python Developer", salary: 135000},
        {id: 3, name: "Najis", gender: "male", designation: "Web Developer", salary: 45000},
        {id: 4, name: "Saniya", gender: "female", designation: "Full Stack Developer", salary: 55000}
    ]
    const [employees, setEmployees]= useState(employeeData)
    
    const deleteEmployee = (id)=>{
        const filteredData = employees.filter((item)=>{
            return item.id !== id;
        })
        setEmployees(filteredData);
    }




    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Designation</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        employees.map((item)=>{
                            return(                             
                                <EmployeeRow key={item.id} item={item} onEmpDelete={deleteEmployee}/>
                            )
                        })
                   }
                </tbody>
            </table>
        </div>
    )
}
export default EmployeeList;