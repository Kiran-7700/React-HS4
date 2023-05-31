import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from "./Components/NavBar/Home"
import Students from "./Components/NavBar/Students"
import Contact from "./Components/NavBar/Contact"
import PageNotFound from './Components/PageFound';

function App() {
  return (
    <div className='App'>
      <div className='Navbar'>
        <NavLink to="/" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Home</NavLink>
        <NavLink to="/students" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Students</NavLink>
        <NavLink to="/contact" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Contact US</NavLink>
      </div>

      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
