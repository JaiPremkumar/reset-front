import  { useEffect, useState } from 'react' 
import '../component/Apps.css'
import { Button } from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from './userAction'

export default function Register(){
     const initialError={
        name:{required:false},
        email:{required:false},
        password:{required:false},
        custom_error:{required:false}
     }
    const[errors,setErrors] = useState(initialError)
       

    const{loading, error,  isAthenticated} = useSelector(state=>state.userState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{

      let errors =initialError
      if(input.name==""){
        errors.name.required=true
        
      }
      if(input.email==""){
        errors.email.required=true  
        
      }
      if(input.password==""){
        errors.password.required=true
        
      }
      if(input.password!=="" && input.password.length<=5){
        errors.custom_error.required=true
      }
    setErrors(errors)
    dispatch(register(input.name,input.email,input.password)) 
    
    }

    const[input,setInput] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleInput =(e)=>{
    setInput({...input,[e.target.name]:e.target.value}) 
    }

    useEffect(()=>{
      if(isAthenticated){
        navigate('/login')
      }

      if(error){
        alert("register invalid")
      }
    },[error,isAthenticated])
    return(
        <>
        <h2 className="title">Register</h2>
        <form className="forms" >
            <input type="name"
            name='name'
            value={input.name}
            placeholder='name'
            onChange={handleInput} 
            
            />
             {errors.name.required?
            (<span className='text-danger'>required</span>):null
            }
            
            <input type="email"
            name='email'
            value={input.email}
            placeholder='email'
            onChange={handleInput}
            
            />
             {errors.email.required?
            (<span className='text-danger'>required</span>):null
            }

            <input type="password"
            name='password'
            value={input.password}
            placeholder='password'
            onChange={handleInput}
            />
             {errors.password.required?
            (<span className='text-danger'>required</span>):null
            }

            <Button onClick={(e)=>handleSubmit(e)}>Register</Button>
            {errors.custom_error.required?
            (<span className='text-danger'>must be 6 character</span>):null
            }
        </form>
        </>
    )
}