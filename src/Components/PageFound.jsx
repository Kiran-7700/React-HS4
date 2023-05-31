import React from 'react'
import logo from "./Assets/error.jpg"

function PageNotFound() {
  return (
    <div className='PageNotFound'>
    <h1>PageNotFound</h1>
    <img src={logo} alt="Logo" />;
    </div>
  )
}

export default PageNotFound;