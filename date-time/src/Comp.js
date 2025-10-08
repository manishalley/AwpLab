import React from "react";
class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state = {display:true}
    }
    render(){
        return (<>
        <button onClick={()=>this.setState({display:!this.state.display})}>Hide</button>
        {this.state.display?<p>Component is displayed</p>:<p>Component is hidden</p>}
        </>)
    }
}
export default Comp;
