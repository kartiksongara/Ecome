import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import "./Singup.css"
const Signup = () => {
    const [ADD, setADD] = useState({})
    const [ALL, setALL] = useState([])
    const navigate = useNavigate();
    const change = (e) => {
        setADD({ ...ADD, [e.target.name]: e.target.value })
    }
    const click = (e) => {
        e.preventDefault();
        let getlocaldata = JSON.parse(localStorage.getItem("user")) || []
        let mylocaldata = getlocaldata.find((e) => e.email === ADD.email)
        if (mylocaldata) {
            Swal.fire({
                icon: "error",
                title: "Enter new email",
                text: "Email is already used "
            })
        } else {
            let newdata = getlocaldata.concat(ADD)
            setALL("newdata")
            localStorage.setItem("user", JSON.stringify(newdata))
            Swal.fire({
                icon: "success",
                title: 'Sign up Successfully!',
                text: 'Login your id now!'
            })
            navigate("/")
        }


    }
    return (
        < >
        <div className='main bg-warning pt-5' >
            <center>
                
                <div  className='box text-light '  >
                


                

                    <div className='contant'>    
                        <form action="" className='mt-5 ' >
                        <label className='label' htmlFor="">Name</label> <br />
                        <input className='input' type="text" onChange={change} name='name' /> <br />
                        <label className='label' htmlFor="">Email</label> <br />
                        <input className='input' type="email" onChange={change} name='email' /> <br />
                        <label className='label' htmlFor="">Phone</label> <br />
                        <input className='input' type="number" onChange={change} name='phone' /> <br />
                        <label className='label' >Dob</label> <br />
                        <input  className='input' type="date" onChange={change} name='date' /> <br />
                        <label className='label' htmlFor="">Password</label> <br />
                        <input className='input' type="password" onChange={change} name='password' /> <br /> <br />
                        <button className='button' onClick={click}   >Signup</button> <br /> <br />
                        <span  className='span text-light'>Already have an account?</span> <br /> <Link to={"/"}>Login 	&rarr;</Link>
                    </form>
                    </div>

                </div>

            </center>
            </div>
        </>
    )
}

export default Signup