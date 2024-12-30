import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { forgot } from "./userAction";

export default function ForgotPassword(){
        
    const[email,setEmail] = useState("")
    const{user} = useSelector(state=>state.userState)

    const dispatch = useDispatch() 
    const handleSubmit=()=>{
        dispatch(forgot(email))
        alert(`token send to ${email}`)
    }
    return(
        <>
          <h2 className="title">ForgotPassword</h2>
          <form className="forms" >
          <input type="email"
            name='email'
            value={email}
            onChange={e=>{setEmail(e.target.value)}}
            placeholder='email'
            />
            <Button onClick={handleSubmit}>Submit</Button> 
            </form>
        </>
    )
}