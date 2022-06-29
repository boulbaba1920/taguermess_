import React, { Component } from 'react';
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";


  
  const AddProduct = () => {
    const [inputs, setInputs] = useState({
      Name: "",
      desc: "",
      price: "",
      cat: ''
    });
    const HandleChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const [loading, setLoading] = useState(false);
    const { Name, desc, price,cat } = inputs;
    const onSubmit = async (e) => {
      e.preventDefault();
      const Prod = {
        Name,
        desc,
        price,
        //cat
      }
      console.log(Prod);
      setLoading(true);
      await axios
      .post("http://localhost:4000/AddProducts", Prod);
      setLoading(false);
    }
   
    
    
  
    return (
      <>
<div className="container">
  <section className="panel panel-default">
    <div className="panel-heading"> 
      <h3 className="panel-title">Add Product</h3> 
    </div> 
    <div className="panel-body">
      <form name='f' onSubmit={(e) => onSubmit(e)} action="designer-finish.html" className="form-horizontal" role="form">
        
        <div className="form-group">
          <label htmlFor="name" className="col-sm-3 control-label">Name</label>
          <div className="col-sm-9">
            <input  onChange={(e) => HandleChange(e)} type="text" className="form-control" name="Name" id="name" placeholder="Name" />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="about" className="col-sm-3 control-label">Description</label>
          <div className="col-sm-9">
            <textarea  onChange={(e) => HandleChange(e)} name='desc' className="form-control" defaultValue={""} />
          </div>
        </div> 
        <div className="form-group">
          <label htmlFor="qty" className="col-sm-3 control-label">Price</label>
          <div className="col-sm-3">
            <input  onChange={(e) => HandleChange(e)} type="text" className="form-control" name="price"  placeholder="DT." />
          </div>
        </div> 
        <div className="form-group">
          
          
          
        </div> 
        <div className="form-group">
          <label htmlFor="name" className="col-sm-3 control-label">Image</label>
          <div className="col-sm-3">
            <label className="control-label small" htmlFor="file_img">Image (jpg/png):</label> <input type="file" name="file_img" />
          </div>
         
        </div> 
        <div className="form-group">
          <label htmlFor="tech" className="col-sm-3 control-label">Categorie</label>
          <div className="col-sm-3">
            <select name='cat' className="form-control">
              <option value='categorie'>Categorie</option>
              <option value="categorie1">Categorie 1</option>
              <option value="categorie2">Categorie 2</option>
            </select>
          </div>
        </div> 
        <hr />
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div> 
      </form>
    </div>
  </section>
</div>
</>
    );
  };
export default AddProduct;
