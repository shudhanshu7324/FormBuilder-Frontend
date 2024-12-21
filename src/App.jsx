import './App.css'
import { BrowserRouter as Router,Routes,Route, BrowserRouter, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import FormPage from './pages/FormPage/FormPage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/formpage' element={localStorage.getItem("isAuthenticated") ? <FormPage /> : <Navigate to={"/signin"}/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
