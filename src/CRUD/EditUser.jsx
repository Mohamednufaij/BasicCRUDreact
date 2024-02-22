import React, { useEffect, useState } from 'react'
import style from './crud.module.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditUser = () => {
    let navigate=useNavigate()
    let formHandle=(e)=>{
      e.preventDefault()
      let payload={
        empname:name,
        empsalary:salary,
        empcompany:company
      }
      axios.put(`http://localhost:5000/Employees/${userId.abc}`,payload)
      .then(()=>{console.log('updated');})
      .catch(()=>{console.log('error');})
      navigate('/user')
    }
    let userId=useParams()
    let[name,setName]=useState('')
    let[salary,setsalary]=useState('')
    let[company,setCompany]=useState('')
    useEffect(()=>{
        axios.get(`http://localhost:5000/Employees/${userId.abc}`)
        .then((response)=>{
        setName(response.data.empname)
        setsalary(response.data.empsalary)
        setCompany(response.data.empcompany)
        })
        
    },[])
  return (
    <div>
      <div id={style.box}>
      
      <form>
        <label >Name:</label>
        <input  type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
        
        <label >Salary:</label>
        <input   type="text" value={salary} onChange={e=>{setsalary(e.target.value)}}/>
        
        <label >Company:</label>
        <input  type="text" value={company} onChange={e=>{setCompany(e.target.value)}}/>
        
        <button type='submit' onClick={formHandle}>Update</button>

        </form>
        </div>
    </div>
  )
}

export default EditUser
