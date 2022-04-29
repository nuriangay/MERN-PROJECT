import React from 'react'
import {useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {register,reset} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'

function Register() {

    const [formData,setFormData]=useState({name:'',email:'',password:'',password2:''})


    const {name,email,password,password2}=formData

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)

    useEffect(()=> {

      const  registerUser = async ()=>{

        
        if(isError){
            toast.error(message)
        }

        //redirect when logged in

        if(isSuccess||user){
            navigate('/')


        }
        dispatch(reset())
        registerUser()

    }
    
    

    },[isError,isSuccess,isLoading,user,message,navigate,dispatch])

    const onChange=(e)=>{
        setFormData((prevState)=>({

            ...prevState,
            [e.target.name]:e.target.value
        }
        ))
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        if(password!==password2){
            toast.error('passwords not match try again')
        }else{

            const userData={name,email,password}

            dispatch(register(userData))
        }
    }
  return (
    <>
    <section className='heading'>
        <h1><FaUser/>Register {user}</h1>
        <p>Please create an account</p>




    </section>

    <section className='form'>

        <form onSubmit={onSubmit} >

            <div className='form-group'>

                <input required name='name' type="text" className='form-control' id='name' value={name} onChange={onChange} placeholder='Please enter a name'/>
            </div>
            <div className='form-group'>

<input required name='email' type="email" className='form-control' id='email' value={email} onChange={onChange} placeholder='Please enter your email'/>
</div>
<div className='form-group'>

<input required name='password' type="password" className='form-control' id='password' value={password} onChange={onChange} placeholder='Please enter your password'/>
</div>
<div className='form-group'>

<input required name='password2' type="password" className='form-control' id='password2' value={password2} onChange={onChange} placeholder='Please enter your password again'/>
</div>

<div className='form-group'>
    <button className='btn btn-block'>Submit</button>
</div>
        </form>


    </section>
    
    </>
  )
}

export default Register