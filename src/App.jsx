import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./components/Signup";
import { Button } from 'bootstrap';
// import Home from "./components/Home";
import { UserAuthContextProvider } from './context/UserAuthContext';
import Navbar from './components/Navbar.jsX';
import Accommodation from './components/Accommodation'; 
import Droom from './components/Droom';
import Gallery from './components/Gallery';
import CustomDatePicker from './components/DatePicker';
import selectedDate from './components/DatePicker';
import handleDateChange from './components/DatePicker';
import DatePickerWithLayout from './components/DatePickerWithLayout';
import ProtectedRoute from "./components/ProtectedRoute";
import Troom from "./components/Troom";
import Broom from "./components/Broom";
import Hroom from "./components/Hroom";
import Proom from "./components/Proom";
// import Droom from "./components/Droom";
import AccNav from './components/AccNav';







function App() {

  return (
    <div>
<UserAuthContextProvider>
      <Container>
        <Row>
          <Col>
              <Routes>

                <Route path="Acc" element={<ProtectedRoute>
                  <Accommodation/>
                </ProtectedRoute>} /> 

                <Route path="/" element={<Login />} />
                <Route path="LogIn" element={<Login />} />
                <Route path="Acc" element={<Accommodation />} /> 
                <Route path="Droom" element={<Droom />} />
                <Route path="Troom" element={<Troom />} />
                <Route path="Broom" element={<Broom />} />
                <Route path="Hroom" element={<Hroom />} />
                <Route path="Proom" element={<Proom />} />




                <Route path="Gallery" element={<Gallery />} />
                <Route path="DatePicker" element={< CustomDatePicker/>} />
                <Route path="Date" element={<DatePickerWithLayout/>} />
                 <Route path="SignUp" element={<Signup />} />
              </Routes>           
          </Col>
        </Row>
      </Container> 
      </UserAuthContextProvider>


    </div>
  );
}

export default App;
