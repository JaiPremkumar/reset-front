import axios from "axios"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { reset } from "./userAction"

export default function ResetPassword(){

    const[password,setPassword] = useState("")
    const{user} = useSelector(state=>state.userState)
    const{token} = useParams()
    const dispatch = useDispatch()
    const handleSubmit= () => {
        dispatch(reset(token,password)) 
    
    }

    return(
        <>
          <h2 className="title">ResetPassword</h2> 
          <form className="forms" >
          <input type="password"
            name='password'
            value={password}
            onChange={e=>{setPassword(e.target.value)}}
            placeholder='Enter new password'
            />
            <Button onClick={handleSubmit}>Submit</Button> 
            </form>
        </>
    )
}