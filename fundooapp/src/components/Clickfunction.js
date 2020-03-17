import React from 'react'
import ReactDOM from 'react-dom'
class Clickfunction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            write : ''
        };
        // this.updatestate = this.updatestate.bind(this);
    }
    btnClick =()=>{
        this.setState ({
            count : this.state.count + 1
          
        });
    }
    updatestate = (e) => {
    
            // [Event.target.name=Event.target.value]
            this.setState({write: e.target.value})
        
        
    }
    clearInput = () => {
        this.setState({write:''});
        ReactDOM.findDOMNode(this.refs.myText).focus();
    }
    render(){
        return ( 
        <div>
            <h1>value:{this.state.count}</h1>
            <button onClick = {this.btnClick}>click</button> 
       
           <input type ="text" name="write" value = {this.state.write} 
           onChange ={this.updatestate} ref ="myText"/>
            <h2>{this.state.write}</h2>
            <button onClick = {this.clearInput}>clear</button>
        </div>
        );
    }
}
export default Clickfunction;