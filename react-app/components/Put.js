import React, {Component} from 'react';
export default class Put extends Component{
    constructor(props){
        super(props);
        this.state={
            id:11,
            name:"Hyd"
        }
       this.handleChange=this.handleChange.bind(this);
       }
     handleChange(event){
         this.setState({name:event.target.value})
     } 
     
 submit(){
        fetch('http://localhost:3000/data/2',{
              method:"PUT",
                headers:{
                  Accept: 'application/json',
                 'Content-Type': 'application/json',
              }, 
              body:JSON.stringify({id:2,name:"hyd"})     
            });
            }
            delete(){
                 fetch('http://localhost:3000/data/5',{
              method:"DELETE"})
            }
    render(){
        return(<div>
            <textarea onChange={this.handleChange} ></textarea>
            <button onClick={this.submit} >Put</button>
            <button onClick={this.delete} >Delete</button>
            <p>{this.state.name}</p>
        </div>)
    }
}