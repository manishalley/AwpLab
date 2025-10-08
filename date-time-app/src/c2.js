import React from 'react'

function c2() {
const currentTime=new Date()
  return (
    
    <div class='index1'>
        <h2>Current Time:</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>

  )
}

export default c2