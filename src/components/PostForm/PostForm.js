import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./PostForm.scss";
import { validate } from "./ValidatePostForm";
import axios from "axios";
import { Header } from "../Header/Header";


export const PostForm = () => {
  const [values, setValues] = useState({name:"", email:"", title:"", content:""});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);  
  
  let history = useHistory();


const handleChange  = event => {
  setValues({
    ...values,
    [event.target.name]: event.target.value
  });
};

  const handleSubmit  = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);    
  } 

  const handlePost = ()=>{
    const options = {
      headers: {"Content-Type": "application/json" }
    }    
      axios.post(" https://enigmatic-scrubland-87375.herokuapp.com/articles", JSON.stringify(values),options)
      .then((response) => {
        console.log(response);            
        history.push("/");                     
      }, (error) => {
        console.log(error);
      });

  }

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSubmitting){
      handlePost();
    }
    // eslint-disable-next-line
  },[errors]);





  return (
    <div>
      <Header headerText="Share your story with the world!"/>
      <form onSubmit={handleSubmit} noValidate>
        <div className="container form">
      
          <div className="row">  
          
            <div className="col-md-6">
            
              <div className="form-group">
                
                
                  <input onChange={handleChange} autoComplete="off" placeholder="Your name" name="name" value={values.name} type="text" className={`form-control ${errors.name && "red"}`}/>
                  {errors.name && <p className="error-text">{errors.name}</p>}
                
              </div>           
              <div className="form-group">               
                
                  <input onChange={handleChange} autoComplete="off" placeholder="Email" name="email" value={values.email} type="text" className={`form-control ${errors.email && "red"}`}/>
                  {errors.email && <p className="error-text">{errors.email}</p>}
                
              </div> 
              </div>
              <div className="col-md-6">
            
            
              <div className="form-group">              
                
                  <input onChange={handleChange} autoComplete="off" placeholder="Title" name="title" value={values.title} type="text" className={`form-control ${errors.title && "red"}`}/>
                  {errors.title && <p className="error-text">{errors.title}</p>}
                
              </div>
              <div className="form-group">             
                
                  <textarea  onChange={handleChange} rows="5" autoComplete="off" placeholder="Your story" name="content" value={values.content} className={`form-control ${errors.content && "red"}`}></textarea>
                  {errors.content && <p className="error-text">{errors.content}</p>}
                
              </div>

              <div className="form-group">
                <button type="submit" name="submit" className="btn btn-block">Publish</button>
              </div>

            </div>

          </div>

        </div>
      </form>
    </div>
  )
 }