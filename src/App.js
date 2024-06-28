import Navbar from './Components/LandingPage/Navbar';
import Hero from './Components/LandingPage/Hero';
import Footer from './Components/LandingPage/Footer';
import Login from './Components/LoginPage/Login';
import { Route, Routes } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import Verify from './Components/VerifyEmail/Verify';
import Signup from './Components/SignupPage/Signup';
import Logout from './Components/Logout/Logout';
import { token, usePost } from './Api';
import Popup from './Components/Popup';

function App() {
  const {refreshToken,successfulPost,setTimeLeft,timeLeft} = usePost()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
    useEffect(()=> {
        if (token) setIsLoggedIn(true)
        else setIsLoggedIn(false)
    },[token])
  useEffect(() => {
      const interval = setInterval(() => {
        if (token) {
          if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
          } else {
            refreshToken("https://task5-lina-sulaiman.trainees-mad-s.com/api/auth/refresh-token")
          }
        }
      }, 1000); 
    return () => clearInterval(interval);
  }, [timeLeft]);
  console.log(timeLeft)
  return <div className="App">
  {/*<Popup />*/}
  <Routes>
    <Route path='/'
    element={
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Hero/>
        <Footer/>
      </Fragment>
    }
    />
  </Routes>
    <Routes>
      <Route path='login' element={<Login setIsLoggedIn={()=>setIsLoggedIn(true)}/>}/>
      <Route path='verify' element={<Verify/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='logout' element={<Logout setIsLoggedIn={()=>setIsLoggedIn(false)}/>}/>
    </Routes>
  </div>;
}

export default App;
