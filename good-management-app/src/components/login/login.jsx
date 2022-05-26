import './login.scss';
import logo from '../../assets/img/logo.jpg';
import { Routes, Route, Link, Navigate } from 'react-router-dom'; 
import { useHookStatePassword, useHookStateName, useHookStateValidate } from '../../hooks/loginHooks';
import { Axios } from 'axios';
import ForgotPasswordInFo from './forgotPassword_info/forgotPassword_info';
import { useEffect } from 'react';
import isEmpty from 'validator/lib/isEmpty';

function Login() {
    const [username, setUsername] = useHookStateName();
    const [password, setPassword] = useHookStatePassword();
    const [validationMsg, setValidationMsg] = useHookStateValidate();

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        })
        .then(response => {
            if (response.data){
                console.log(response.data)
            }
        })
    }

    const validateAll = () => {
        const msg = {};
        if (isEmpty(username)) {
            msg.username = 'Vui lòng nhập tên';
        }
        if (isEmpty(password)) {
            msg.password = 'Vui lòng nhập mật khẩu';
        }

        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const onSubmitLogin = () => {
        const isValid = validateAll();
        if (!isValid) return

        <Navigate to={'/forgotPassword_info'} replace={true}/>
    }


    return (
       <div className='loginPage'>
           <div className='loginForm'>
               <div className='pageLogo'>
                    <img src={logo} alt="logo" />
               </div>
               <form className='form'>
                   <div className='formInput'>
                       <div className='inputGroupAppend'>
                           <span className='inputGroupText'><i className="fas fa-user"></i></span>
                       </div>
                        <input 
                            type="text" 
                            name='name' 
                            className='name inputForm' 
                            placeholder='Tên đăng nhập'
                            onChange={e => setUsername(e.target.value)}/>
                   </div>
                   <p className="errInput">{validationMsg.username}</p>
                   <div className='formInput'>
                        <div className='inputGroupAppend'>
                            <span className='inputGroupText'><i className="fas fa-key"></i></span>
                        </div>
                        <input 
                            type="password" 
                            name='password' 
                            className='password inputForm'
                            placeholder='Mật khẩu' 
                            onChange={e => setPassword(e.target.value)}/> 
                    </div>
                    <p className="errInput">{validationMsg.password}</p>    
                    <div className='formRememberPassword'>
                        <input type="checkbox" name="check"/>
                        <p>Lưu mật khẩu</p>
                    </div>
                    <div className='formLoginButton'>
                        <button type='button' className='loginButton' onClick={onSubmitLogin}>Đăng nhập</button>
                    </div>
                    <div className='formForgotPassword'>
                        <Link to='/forgotPassword_info' className='link'>Quên mật khẩu</Link>
                    </div>
               </form>
           </div>
       </div>
    );
}

export default Login