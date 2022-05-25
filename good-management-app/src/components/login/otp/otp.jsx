import logo from '../../../assets/img/logo.jpg'
import './otp.scss';
import { Routes, Route, Link, Navigate } from 'react-router-dom'; 
import $ from 'jquery';
import { useEffect } from 'react';
import { firebase, auth } from '../../../firebase';
import { useHookOtp, useHookPhone, useHookResult, useHookStep } from '../../../hooks/loginHooks';

function OTP() {

    const [phoneNumber, setPhoneNumber] = useHookPhone();
    const [otp, setOtp] = useHookOtp();
    const [step, setStep] = useHookStep();
    const [result, setResult] = useHookResult();

	const signin = () => {
		if (phoneNumber === "") return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
              'size': 'invisible'
          });
          
		auth.signInWithPhoneNumber(phoneNumber, verify).then((result) => {
            setResult(result);
            setStep('VERIFY_OTP');
		})
        .catch((err) => {
          alert(err);
        });
	}

	const ValidateOtp = () => {
		if (otp === null) return;
        
		result.confirm(otp).then((result) => {
          setStep('VERIFY_SUCCESS');
		})
        .catch((err) => {
          alert("Incorrect code");
       })
	}


    useEffect(() => {
    $("input").on("input", function() {
        var $this = $(this);
        setTimeout(function() {
            if ( $this.val().length >= parseInt($this.attr("maxlength"),10) )
                $this.next("input").trigger('focus');
        },0);
    })
    })

    return (
      <>
        <div className='changePasswordPage'>
            <div className='changePasswordForm'>
                <div className='pageLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='otpParagraph'>
                    <p>Mã OTP đã được gửi đến số điện thoại của bạn, vui lòng kiểm tra và nhập OTP</p>
                </div>
                <div className='otp_input text-start mb-2'>
                    {/* <div className="d-flex align-items-center justify-content-between mt-2">
                        <input type="number" maxLength='1' className="form-control"  />
                        <input type="number" maxLength='1' className="form-control"  />
                        <input type="number" maxLength='1' className="form-control"  />
                        <input type="number" maxLength='1' className="form-control"  />
                        <input type="number" maxLength='1' className="form-control"  />
                        <input type="number" maxLength='1' className="form-control"  />
                    </div>  */}
                    {step === 'INPUT_PHONE_NUMBER' &&
                  <div>
                    <input value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }}
                      placeholder="phone number" />
                    <br/><br/>
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                  </div>
                }

                {step === 'VERIFY_OTP' &&
                  <div>
                    <input type="text" placeholder={"Enter your OTP"}
                      onChange={(e) => { setOtp(e.target.value) }} />
                    <br/><br/>
                    <button onClick={ValidateOtp}>Verify</button>
                  </div>
                }

                {step === 'VERIFY_SUCCESS' &&
                   <Navigate to='/changePassword' replace={true}/>
                }

                {step === 'VERIFY_FAIL' &&
                  <h3>Verify Fail</h3>
                }
                </div>
            </div>
        </div>
      </>  
    );
}

export default OTP