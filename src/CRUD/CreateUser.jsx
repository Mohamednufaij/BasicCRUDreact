import React, { useEffect, useState } from 'react'
import style from './crud.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateUser = () => {
let[name,setName]=useState('')
let[sal,setSal]=useState('')
let[comp,setComp]=useState('')


//form handling
// const HandleSubmit=(e)=>{
//       e.preventDefault()
//       const error={}
//       if(name.trim()===''){
//         error.name='enter name properly'
//       }

// }
let navigate=useNavigate()
let getName=(e)=>{
  setName(e.target.value)
  // console.log(name);
}
let getsal=(e)=>{
  setSal(e.target.value)
  // console.log(sal);
}
let getcomp=(e)=>{
  setComp(e.target.value)
  // console.log(comp);
}
let payload={
  empname:name,
  empsalary:sal,
  empcompany:comp,

}
  
let formhandle=(e)=>{
  e.preventDefault()
  // console.log(name,sal);
  axios.post("http://localhost:5000/Employees",payload)
  .then(()=>{console.log('data stored');})
  .catch(()=>{console.log('error');})
  navigate("/user")
}
useEffect(()=>{
  axios.get("http://localhost:5000/Employees")
  .then(()=>{console.log("got data");})
  .catch(()=>{console.log("error");})
},[])
  return (
    <div id={style.box}>
      
      <form>
        <label >Name:</label>
        <input  type="text" value={name} onChange={getName} />
        
        <label >Salary:</label>
        <input   type="text" value={sal} onChange={getsal} />
        
        <label >Company:</label>
        <input  type="text" value={comp} onChange={getcomp} />
        
        <button type='submit' onClick={formhandle}>Submit</button>

      </form>
    </div>
  )
}

export default CreateUser
