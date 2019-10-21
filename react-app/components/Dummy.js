import React, { Component } from 'react';

class Dummy extends Component {
constructor(props){
    super(props);
    this.state={
        name:"Chiiti"
    }
    this.handleNameChange=this.handleNameChange.bind(this);
}
componentDidMount(){
    document.title=this.state.name;
}
handleNameChange(e){
    this.setState({name:e.target.value})
}
    render() {
        return (
            <div>
            <input value={this.state.name} onClick={this.handleNameChange} />    
            </div>
        );
    }
}
export default Dummy;