import react, { useEffect, useState } from 'react' 
import '../component/Apps.css'
import { Button, ButtonGroup } from 'react-bootstrap'
import { login } from './userAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


export default function Login(){
     const initialError={
        email:{required:false},
        password:{required:false},
        custom_error:{required:false}
     }
    const[errors,setErrors] = useState(initialError)
        
    const [email,setEmail]=useState("")
    const[password,setPassword] = useState("")
    const dispatch = useDispatch()
    const{loading, error,  isLogin} = useSelector(state => state.userState)
    const navigate = useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()

        let errors=initialError

        if(email===""){
            errors.email.required=true
        }

        if(password===""){
            errors.password.required=true
        }

        if(password.length<=5){
            errors.custom_error.required=true
        }
     setErrors(errors)
    dispatch(login(email,password))
    }
   useEffect(()=>{
    if(isLogin){
        navigate('/home')
    }

    if(error){
        alert("user Failed")  
    }
   },[error,isLogin])


    return(
        <>
        <h2 className="title">LOGIN</h2>
        <form className="forms" >

            <input type="email"
            name='email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder='email'
            />
            {errors.email.required?
            (<span className='text-danger'>required</span>):null
            }


            <input type="password"
            name='password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder='password'
            />
            {errors.password.required?
            (<span className='text-danger'>required</span>):null
            }
            {errors.custom_error.required?
            (<span className='text-danger'>Must be 6 characters</span>):null
            }

            <Button onClick={handleSubmit}
            disabled={loading}
            >Login</Button>
            <br/>
            <Link to={'/forgot'}><span className='text-primary'>forgot-Password</span></Link>
         
        </form>
        </>
    )
}