import { response } from "express";
import React, { useEffect, useState } from "react";

const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:""
    });
    useEffect(()=>{
        axios.post('http://localhost:8000/login',data).then(
            response =>response.json()
        )
    },[]);
//Change handler
    const change=(e)=>{
     setData({
        ...data,
        [e.target.name]:e.target.value
     })
    }

  return (
    <div className="conatiner-xxl bg-white shadow-lg px-md-5">
      <center><h3 className="container">Login Form</h3></center>
      <form method="POST" className="container border rounded p-3 border-warning">
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            name="email"
            onChange={change}
            value={data.email}
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            onChange={change}
            value={data.password}
            required
          />
        </div>
        <button type="submit" onChange={change} onSubmit={()=>{console.log("Clickled")}} class="btn btn-primary">
          login
        </button>
      </form>
      {data.email}
      {data.password}
    </div>
  );
};

export default Login;
