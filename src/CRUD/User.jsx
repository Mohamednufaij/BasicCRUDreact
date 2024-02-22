import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./crud.module.css"
import { Link } from 'react-router-dom'

const User = () => {
  let[reload,setreload]=useState(false)
  let userDelete=(id)=>{
    axios.delete(`http://localhost:5000/Employees/${id}`)
    //window.location.relaod("/user") whole website will load at the time of delete
    setreload(true)
  }
  let [users,setusers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/Employees")
    .then((response)=>{setusers(response.data);})
    .catch(()=>{console.log('error');})
    setreload(false)

  },[reload])
  return (
    <div id={style.usersPage}>
      {users.map((user)=>{
        return(
          <div id={style.card}>
            
            <table>
              <tr>
                <th>Name:</th>
                <td>{user.empname}</td>
                </tr>
              <tr>
              <th>Salary:</th>
              <td>{user.empsalary}</td>
              </tr>
              <tr>
              <th>Company:</th>
              <td>{user.empcompany}</td>
              </tr>  
              <tr>
                <button><Link to={`/edit/${user.id}`}>Edit</Link></button>
                <button onClick={()=>{userDelete(user.id)}}>Delete</button>
              </tr>
              
            </table>
          </div>
        )
      })}

    </div>
  )
}

export default User
