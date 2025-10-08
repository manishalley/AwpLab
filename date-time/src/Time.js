import React from 'react'
class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentDate:new Date().toLocaleString(),displayMessage:false,id:null}
    }
    render(){
        return(<>
        <p>{this.state.currentDate}</p>
        <button onClick={()=>{
            this.setState({currentDate:new Date().toLocaleString()})
        }}>Current Date</button>
        <br></br>
        <hr></hr>
        <p></p>
        <button onClick={()=>{
            this.setState({displayMessage:true})}}>Say GoodBye</button>

        {this.state.displayMessage?<p>GoodBye</p>:<p></p>}
        </>)
    }
    componentDidMount(){
        const id = setInterval(()=>{
            this.setState({currentDate:new Date().toLocaleString(),id:id})
        })
    }
    componentWillUnmount(){
        this.setState({id:null})
    }
}

export default  Time

