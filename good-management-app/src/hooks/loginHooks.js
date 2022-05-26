import { useState } from "react"


// Login
export const useHookStateName = () => {
    const [username, setUsername] = useState('');
    return [username, setUsername];
}

export const useHookStatePassword = () => {
    const [password, setPassword] = useState('');
    return [password, setPassword];
}

export const useHookStateValidate = () => {
    const [validationMsg, setValidationMsg] = useState('');
    return [validationMsg, setValidationMsg];
}

//OTP
export const useHookPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    return [phoneNumber, setPhoneNumber];
}

export const useHookOtp = () => {
    const [otp, setOtp] = useState('');
    return [otp, setOtp];
}

export const useHookStep = () => {
    const [step, setStep] = useState('INPUT_PHONE_NUMBER');
    return [step, setStep];
}

export const useHookResult = () => {
    const [result, setResult] = useState('');
    return [result,setResult];
}