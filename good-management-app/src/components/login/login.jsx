import styles from './login.module.scss';
import logo from '../../assets/img/logo.jpg';
import { Routes, Route, Link } from 'react-router-dom'; 
import { useHookState, useHookStateOfReg } from '../../hooks/loginHooks';
import { Axios } from 'axios';
import ForgotPasswordInFo from './forgotPassword_info/forgotPassword_info';

function Login() {
    const [username, setUsername] = useHookStateOfReg();
    const [password, setPassword] = useHookState();

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

    return (
       <div className={styles.loginPage}>
           <div className={styles.loginForm}>
               <div className={styles.pageLogo}>
                    <img src={logo} alt="logo" />
               </div>
               <form className={styles.form}>
                   <div className={styles.formInput}>
                       <div className={styles.inputGroupAppend}>
                           <span className={styles.inputGroupText}><i className="fas fa-user"></i></span>
                       </div>
                        <input 
                            type="text" 
                            name='name' 
                            className={styles.inputForm} 
                            placeholder='Tên đăng nhập'
                            onChange={e => setUsername(e.target.value)}/>
                   </div>
                   <div className={styles.formInput}>
                        <div className={styles.inputGroupAppend}>
                            <span className={styles.inputGroupText}><i className="fas fa-key"></i></span>
                        </div>
                        <input 
                            type="password" 
                            name='password' 
                            className={styles.inputForm} 
                            placeholder='Mật khẩu' 
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className={styles.formRememberPassword}>
                        <input type="checkbox" name="check"/>
                        <p>Lưu mật khẩu</p>
                    </div>
                    <div className={styles.formLoginButton}>
                        <button className={styles.loginButton} onClick={login}>Đăng nhập</button>
                    </div>
                    <div className={styles.formForgotPassword}>
                        <Link to='/forgotPassword_info' className={styles.link}>Quên mật khẩu</Link>
                    </div>
               </form>
           </div>
         <Routes>
         </Routes>
       </div>
    );
}

export default Login