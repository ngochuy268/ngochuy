import Login from './components/login/login';
import { Routes, Route, Link } from 'react-router-dom'; 
import OTP from './components/login/otp/otp';
import ForgotPasswordInFo from './components/login/forgotPassword_info/forgotPassword_info';
import ChangePassword from './components/login/changePassword/changePassword';

function App() {
  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/forgotPassword_info/*' element={<ForgotPasswordInFo />}> </Route>
        <Route path='/otp/*' element={<OTP />}> </Route>
        <Route path='/changePassword/*' element ={<ChangePassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
