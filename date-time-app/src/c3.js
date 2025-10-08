import React from 'react'

class c3 extends React.Component{
  render(){
    const current=new Date();
  return (
    <div class='index' >
     <h2>Current Date and Time:</h2>
      <p>{current.toLocaleString()}</p>
    </div>
  )
}
}

export default c3;