import React, { useState } from "react";
import "./PostForm.css";
import { validate } from "./ValidatePostForm";
import axios from "axios";


export const PostForm = () => {
  const [values, setValues] = useState({name:"", email:"", title:"", content:""});
  const [errors, setErrors] = useState({name:"", email:"", title:"", content:""});
  
  
const handleChange  = event => {
  setValues({
    ...values,
    [event.target.name]: event.target.value
  });
};

const handleSubmit  = event => {
  event.preventDefault();
  setErrors(validate(values));
    
const options = {
  headers: {"Content-Type": "application/json" }
}

  axios.post(" https://enigmatic-scrubland-87375.herokuapp.com/articles", JSON.stringify(values),options)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

 }
  

  


  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="container form">
    
        <div className="row">  
        
          <div className="col-md-6">
          
            <div className="form-group">
              <label>Name</label>
              
                <input onChange={handleChange} name="name" value={values.name} type="text" className={`form-control ${errors.name && "red"}`}/>
                {errors.name && <p>{errors.name}</p>}
              
            </div>         
            <div className="form-group">
              <label>Email</label>
              
                <input onChange={handleChange} name="email" value={values.email} type="text" className={`form-control ${errors.email && "red"}`}/>
                {errors.email && <p>{errors.email}</p>}
              
            </div> 
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Title</label>
              
                <input onChange={handleChange} name="title" value={values.title} type="text" className={`form-control ${errors.title && "red"}`}/>
                {errors.title && <p>{errors.title}</p>}
              
            </div>
            <div className="form-group">
              <label>Your story</label>
              
                <textarea  onChange={handleChange} name="content" value={values.content} className={`form-control ${errors.content && "red"}`} rows="7"></textarea>
                {errors.content && <p>{errors.content}</p>}
              
            </div>

            <div className="form-group">
              <button type="submit" name="submit" className="btn btn-block">Publish</button>
            </div>

          </div>

        </div>

      </div>
    </form>
  )
 }