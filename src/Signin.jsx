import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import"./APPCSS.css"
function Signin({setemail}) {
    const [ADD, setADD] = useState({})
    
    const navigate=useNavigate();
    const change=(e)=>{
        setADD({...ADD,[e.target.name]:e.target.value})
    }
    const click=(e)=>{
        e.preventDefault();
        let localdata=JSON.parse(localStorage.getItem("user")) ||[]
        let getmydata=localdata.find((e)=>e.email===ADD.email)
        let index= localdata.findIndex((ele)=>ele.email === ADD.email)
        if(getmydata){
            localStorage.setItem("loggedinuser",JSON.stringify(localdata[index]))
            Swal.fire({
                icon:"success",
                title:"Login Successfull",
                text:"welcome back"
            })
            navigate("/Electronics")
            setemail(ADD.email)
        }else{
            Swal.fire({
                icon:"error",
                title:"Login faild",
                text:"Invalid username and  password"
            })
        }

    }
  return (
    <>
<div class='singin'>
     <center className='center'> 
        <form action="" className='text-light'>
            <label htmlFor="" className='label mt-5'>Name</label> <br />
            <input className='input' type="text" onChange={change} name='name' /> <br />
            <label className='label' htmlFor="">Email</label> <br />
            <input className='input' type="email"  onChange={change} name='email'/> <br />
            <label className='label' htmlFor="">Password</label> <br />
            <input className='input' type="password" onChange={change} name='password' /> <br /> <br />
            <button className='button' onClick={click} >Signin</button>  <br /> <br />
            <span className='span'>Create an accont </span>
            <Link to={"/Signup"}> Signup &rarr;</Link>
        </form>
        
    </center>
    </div>
        </>

  )
}

export default Signin