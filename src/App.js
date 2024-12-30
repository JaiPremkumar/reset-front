import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './component/Register';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
        <Route path='/reset/:token' element={<ResetPassword/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
