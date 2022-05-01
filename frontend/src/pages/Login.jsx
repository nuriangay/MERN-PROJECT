import React from 'react'
import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'

function Login() {

    const [formData,setFormData]=useState({email:'',password:''})


    const {email,password}=formData

    const dispatch=useDispatch()

    const {user,isLoading,isSuccess,message}=useSelector(state=>state.auth)

    const onChange=(e)=>{
        setFormData((prevState)=>({

            ...prevState,
            [e.target.name]:e.target.value
        }
        ))
    }

    const onSubmit=(e)=>{
        e.preventDefault()

        const userData={email,password}
       
        dispatch(login(userData))

      
    }
    

  return (
    <>
    <section className='heading'>
        <h1><FaSignInAlt/>Login</h1>
        <p>Please Login To get Support</p>




    </section>

    <section className='form'>

        <form onSubmit={onSubmit} >

           
            <div className='form-group'>

<input required name='email' type="email" className='form-control' id='email' value={email} onChange={onChange} placeholder='Please enter your email'/>
</div>
<div className='form-group'>

<input required name='password' type="password" className='form-control' id='password' value={password} onChange={onChange} placeholder='Please enter your password'/>
</div>


<div className='form-group'>
    <button className='btn btn-block'>Submit</button>
</div>
        </form>


    </section>
    
    </>
  )
}

export default Login