import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        loading:false,
        isAthenticated:false,
        isLogin:false
    },
    reducers:{
        registerRequest(state,action){
            return{
                loading:true
            }
        },
        registerSuccess(state,action){
            return{
             loading:false,
             isAthenticated:true,
             user:action.payload.user
            }
        },
        registerFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        },loginRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        loginSuccess(state,action){
            return{
                loading:false,
                isAthenticated:true,
                isLogin:true,
                user:action.payload.user
            }
        },
        loginFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        forgotRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        forgotSuccess(state,action){
            return{
                loading:false,
                isAthenticated:true,
                user:action.payload.user
            }
        },
        forgotFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        resetRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        resetSuccess(state,action){
            return{
                loading:false,
                isAthenticated:false,
                user:action.payload.user
            }
        },
        resetFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        }
        
    }
})

const{actions, reducer} = userSlice;

export const{loginRequest, loginSuccess, loginFailed,
    registerRequest,registerSuccess,registerFailed,
    forgotRequest,forgotSuccess,forgotFailed,resetFailed,
    resetSuccess,resetRequest
} = actions;

export default reducer;