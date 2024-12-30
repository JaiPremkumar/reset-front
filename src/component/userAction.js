import { forgotFailed, forgotRequest, forgotSuccess, loginFailed, loginRequest, loginSuccess, registerFailed, registerRequest, registerSuccess, resetFailed, resetRequest, resetSuccess } from "./userSlice";
import axios from 'axios'

export const login = (email,password)=>async(dispatch)=>{
    try {
        dispatch(loginRequest())
        const {data} = await axios.post(`https://reset-back-5p0m.onrender.com/api/v1/login`,{email,password})
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFailed(error.response.data.message))
    }
}

export const register=(name,email,password)=>async(dispatch)=>{
    try {
        dispatch(registerRequest())
       const {data} = await axios.post(`https://reset-back-5p0m.onrender.com/api/v1/register`,{name,email,password})
       dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFailed(error.response.data.message))
        
    }
}

export const forgot =(email,)=>async(dispatch)=>{
    try {
        dispatch(forgotRequest())
        await axios.post(`https://reset-back-5p0m.onrender.com/api/v1/forgots`,{email})
        dispatch(forgotSuccess())
    } catch (error) {
        dispatch(forgotFailed(error.response.data.message)) 
    }
}


export const reset =(token,password)=>async(dispatch)=>{
    try {
        dispatch(resetRequest())
        await axios.post(`https://reset-back-5p0m.onrender.com/api/v1/reset/${token}`,{password})//reset/:token
        dispatch(resetSuccess())
    } catch (error) {
        dispatch(resetFailed(error.response.data.message)) 
    }
}

