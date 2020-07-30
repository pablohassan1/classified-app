import React from "react";
import "./PostForm.css";


export const PostForm = () => (

    <div className="container form">
	
	<div className="row">  
       
       <div className="col-md-6">
       	
         <div className="form-group">
         	<label>Name</label>
         	<input type="text" className="form-control"/>
         </div>         
         <div class="form-group">
         	<label>Email</label>
         	<input type="text" className="form-control"/>
         </div> 
       </div>
       <div className="col-md-6">
       <div className="form-group">
         	<label>Title</label>
         	<input type="text" className="form-control"/>
         </div>                

         <div className="form-group">
         	<label>Your story</label>
         	<textarea  className="form-control" rows="7"></textarea>
         </div>

         <div className="form-group">
         	<button className="btn btn-block">Publish</button>
         </div>

       </div>

    </div>

</div>
)