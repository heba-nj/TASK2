import Navbar from './Components/LandingPage/Navbar';
import Hero from './Components/LandingPage/Hero';
import Footer from './Components/LandingPage/Footer';
import Login from './Components/LoginPage/Login';
import { Route, Routes } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Verify from './Components/VerifyEmail/Verify';
import Signup from './Components/SignupPage/Signup';
import Logout from './Components/Logout/Logout';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return <div className="App">
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
