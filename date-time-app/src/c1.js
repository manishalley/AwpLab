import React from 'react'
import './index.css';
function C1() {
    const currentDateTime=new Date()
  return (
    
    <div class='index'>
        <h2>Current Date:</h2>
        <p>{currentDateTime.toLocaleDateString()}</p>
    </div>

  )
}

export default C1