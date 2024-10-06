import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var [user,setUser] = useState([])
  var navigate = useNavigate();
  axios.get("http://localhost:3009/view")
  
  .then(response => {
    console.log(response.data)
    setUser(response.data)
  })
  const delValue=(id) => {
    console.log(id)
    axios.delete("http://localhost:3009/delete/"+id)
    .then((res) =>{
      alert(res.data.message)
      window.location.reload();

    })
  }
  const updateValue = (val) => {
    navigate("/form" , {state: { val }});
  };


  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Dept</TableCell>
                    <TableCell>Salary</TableCell>
                    
                    
                </TableRow>
            </TableHead>
            <TableBody>
              {user.map((val) => {
                return(
                  <TableRow>
                    <TableCell>{val.Name} </TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept}</TableCell> 
                    <TableCell>{val.Sal}</TableCell>
                    <Button variant="contained" color="error" size="small" onClick={() => delValue(val._id)}>Delete</Button>
                    <Button variant='contained' color='inherit' size='small' onClick={()=>updateValue(val)}>Update</Button>
                  </TableRow>
                )
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
