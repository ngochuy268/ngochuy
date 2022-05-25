import logo from '../../../assets/img/logo.jpg'
import styles from'./forgotPassword_info.module.scss';
import { Routes, Route, Link } from 'react-router-dom'; 

function ForgotPasswordInFo() {

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
                            <span className={styles.inputGroupText}><i className="fas fa-user"></i></span>
                        </div>
                            <input 
                                type="text" 
                                name='id' 
                                className={styles.inputForm} 
                                placeholder='ID nhân viên'
                                />
                    </div>
                    <div className={styles.formInput}>
                            <div className={styles.inputGroupAppend}>
                                <span className={styles.inputGroupText}><i className="fas fa-key"></i></span>
                            </div>
                            <input 
                                type="text" 
                                name='name' 
                                className={styles.inputForm} 
                                placeholder='Họ và tên' 
                                />
                    </div>
                    <div className={styles.formInput}>
                            <div className={styles.inputGroupAppend}>
                                <span className={styles.inputGroupText}><i className="fas fa-calendar"></i></span>
                            </div>
                            <input 
                                type="date" 
                                name='date' 
                                className={styles.inputForm} 
                                placeholder='Ngày tháng năm sinh' 
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

export default ForgotPasswordInFo