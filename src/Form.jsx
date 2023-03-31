import React, { useState } from "react";
function Form(props) {

   const [fullName, setFullName]=useState();
   const [formData, setFormData]=useState();
   
   const onInputHandle=(event)=>{
    // console.log(event.target.value);
    const text = event.target.value;
    setFullName(text);
   }

   const handleChange=(event)=>{
        const val = event.target.value;
        const name = event.target.name;
        console.log({val, name});
        setFormData((prev)=>({
            ...prev,
            [name]: val
        }))
   }

   //{name: value, email: value, password: value}

//    spread operator - ...prev - name: value email: value password: value



  return (
    <div className="container">

      <div className="mb-3">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          onChange={onInputHandle}
        />

        <p>{fullName}</p>
      </div>

    <div className="mb-3">
        <form>
            <input type="text" name="name" placeholder="name" className="form-control" onChange={handleChange} />

            <input type="text" name="email" placeholder="email" className="form-control" onChange={handleChange} />

            <input type="text" name="password" placeholder="password" className="form-control" onChange={handleChange} />
        </form>

        <p>{formData?.name}, {formData?.email}, {formData?.password}</p>
    </div>


    </div>
  );
}

export default Form;



