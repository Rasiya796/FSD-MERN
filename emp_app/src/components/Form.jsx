import { Button, TextField } from '@mui/material'
import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Form = (props) => {
  var [input,setInput]=useState({Name:"",Age: "",Dept:"",Sal:""})
  var location = useLocation
  console.log(location.state)


  const inputHandler = (e) =>{
    setInput({...input,[e.target.name]: e.target.value});
    console.log(input);
  }
  const addHandler =()=>{
    if(location.state !== null){
      axios .put("http://localhost:3009/update"+location.state.val._id,input)
      .then((es) =>{
        alert(res.data.message)
        navigate('/view')

      })
      .catch((error) => {console.log(error)})
    }
    else{
    axios.post("http://localhost:3009/add",input)
    .then((res)=>{
      console.log(res);
      alert(res.data.message);
      navigate('/view')
      
    })
    }
    useEffect(() => {
      if (location.state !== null){
        setInput({...input,Name:location.state.val.Name,Age:location.state.Age,Dept:location.state.Dept,Sal:location.state.Sal,})
      }
    })

  }
  return (
    <div>
      <h1 style={{color:'blue'}}>Employee Register</h1>
      <TextField variant="outlined" label="Name" value={input.Name} onChange={inputHandler} name='Name'></TextField><br />
      <TextField variant="outlined" label="Age" value={input.Age} onChange={inputHandler} name='Age'></TextField><br />
      <TextField variant="outlined" label="Dept" value={input.Dept} onChange={inputHandler} name='Dept'></TextField><br />
      <TextField variant="outlined" label="Salary" value={input.Sal} onChange={inputHandler} name='Sal'></TextField><br /><br />
      <Button variant="contained" size="medium" onClick={addHandler}> Submit</Button><br />
      
      
    </div>
  )
}

export default Form
