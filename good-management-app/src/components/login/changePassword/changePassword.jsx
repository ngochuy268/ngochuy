import logo from '../../../assets/img/logo.jpg'
import styles from './changePassword.module.scss';
import { Routes, Route, Link } from 'react-router-dom'; 

function ChangePassword() {

    const confirm = () => {

    };


    return (
        <div className={styles.changePasswordPage}>
            <div className={styles.changePasswordForm}>
                <div className={styles.pageLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <form className={styles.form}>
                    <div className={styles.formInput}>
                            <div className={styles.inputGroupAppend}>
                                <span className={styles.inputGroupText}><i className="fas fa-key"></i></span>
                            </div>
                            <input 
                                type="password" 
                                name='password' 
                                className={styles.inputForm} 
                                placeholder='Nhập mật khẩu' 
                                />
                    </div>
                    <div className={styles.formInput}>
                            <div className={styles.inputGroupAppend}>
                                <span className={styles.inputGroupText}><i className="fas fa-key"></i></span>
                            </div>
                            <input 
                                type="password" 
                                name='retype-password' 
                                className={styles.inputForm} 
                                placeholder='Nhập lại mật khẩu' 
                                />
                    </div>
                    <div className={styles.formConfirmButton}>
                        <button className={styles.confirmButton} onClick={confirm}>
                            <Link to='/otp' className={styles.link}>Xác nhận</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword