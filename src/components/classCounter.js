import React from 'react';

class Counter extends React.Component{
    state={
        count:0
    }
    handleClick=()=>{
        
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
           <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            </div>
            )
    }
}

export default Counter