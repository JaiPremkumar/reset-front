import { applyMiddleware,combineReducers, configureStore } from'@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from './userSlice'
import reducer from './userSlice';


/*const Rootreducers =  combineReducers({
    reducer,
     userReducer
})*/


const store = configureStore({
    reducer:{
        userState:userReducer
    },
    
}, applyMiddleware(thunk))

export default store; 