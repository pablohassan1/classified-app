import React, { useState } from "react";
import "./PostForm.css";
import validate  from "./validateForm";




export const PostForm = () => {
  const [values, setValues] = useState({name: "", email: "", title: "", content: ""});
  // values is an aboject and setValues is a function which sets it
  const [errors, setErrors] = useState({name: "", email: "", title: "", content: ""});
  // errors is an aboject and setErrors is a function which sets it

  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    console.log("submitted");
  }

return (
  <form onSubmit={handleSubmit} noValidate>  
    <div className="container form">	
      <div className="row">  
        
        <div className="col-md-6">
          
          <div className="form-group">
            <label>Name</label>
            <input onChange={handleChange} value={values.name} name="name" type="text" className="form-control"/>
            {errors.name && <p>{errors.name}</p>}
          </div>         
          <div className="form-group">
            <label>Email</label>
            <input onChange={handleChange} value={values.email} name="email" type="text" className="form-control"/>
            {errors.email && <p>{errors.email}</p>}
          </div> 
        </div>
        <div className="col-md-6">
        <div className="form-group">
            <label>Title</label>
            <input onChange={handleChange} value={values.title} name="title" type="text" className="form-control"/>
            {errors.title && <p>{errors.title}</p>}
          </div>                

          <div className="form-group">
            <label>Your story</label>
            <textarea onChange={handleChange} value={values.content} name="content" className="form-control" rows="7"></textarea>
            {errors.content && <p>{errors.content}</p>}
          </div>

          <div className="form-group">
            <button className="btn btn-block">Publish</button>
          </div>
        </div>
      </div>
    </div>
  </form>
)
}