import { useState } from "react";

function StudentList(){
    // var name = "Vipin";
    // function changeName(){
    //     name = "Ishu";
    // }

    const studentData = [
        {id: 1, name: "Poonam", fees: 20000},
        {id: 2, name: "Ishu", fees: 25000},
        {id: 3, name: "Najis", fees: 1000},
        {id: 4, name: "Shubham", fees: 50000}
    ]
    
    const [state, setState]=useState("Vipin");
    const [studentList, setStudentList]=useState(studentData);


       
    const changeName = ()=>{
        setState("Ishu")
        
    }

    return(
        <div>
            {state}
            <button onClick={changeName}>Change Name</button>

        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Fees</th>
            </tr>

            {
                studentList.map((item, index)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.fees}</td>
                        </tr>
                    )
                })
            }



        </table>



        </div>
    )
}
export default StudentList;