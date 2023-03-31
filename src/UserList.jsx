import { useState } from "react";
import User from "./User";

function UserList(){
    const [gender, setGender] = useState("male");

    return (
        <div>
            <h2>User List</h2>
            <User title="Hello World" data={3} gender={gender}/>
            <User title="Hello India" data={4}/>
            <User title="Bye World" data={5}/>
            <User title="Bye India" data={7}/>
        </div>
    )
}
export default UserList;