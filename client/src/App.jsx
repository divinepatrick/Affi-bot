import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />           
          <Route path="/about" element={<About />} />           
          <Route path="/profile" element={<Profile />} />           
          <Route path="/sign-in" element={<SignIn />} />           
          <Route path="/sign-up" element={<SignUp />} />           
        </Routes>
        <Footer />
      </BrowserRouter>  
    </div>
  )
}

export default App