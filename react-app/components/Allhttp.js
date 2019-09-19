import React,{Component} from 'react';
export default class Allhttp extends Component{
    constructor(props){
        super(props)
        this.state={id:"",name:""}
    }//get request
    componentDidMount(){
        fetch('http://localhost:3000/data/2')
        .then(res=>res.json())
        .then((response)=>{
            this.setState({id:response.id,name:response.name})
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    //posting data on server using POST
    post(){
        fetch('http://localhost:3000/data',{
            method:"POST",
            headers:{Accept:"application/json", "Content-Type":"application/json"},
            body:JSON.stringify({id:1,name:"Ram"}) 
        })
    }
    //Updating serverdata using PUT
    put(){
        fetch('http://localhost:3000/data/10',{
            method:"PUT",
            headers:{Accept:"application/json", "Content-Type":"application/json"},
            body:JSON.stringify({id:9,name:"Dhoni"}) 
        })
    }
    //deleting particular object data from server Using DELETE
    delete(){
        fetch("http://localhost:3000/data/8",{method:"DELETE"})
    }
    render(){
        return(<div>
            <div><p>get request check here</p>
            <p>id:{this.state.id}</p>
            <p>name:{this.state.name}</p>
           </div>
           <div>
               <p>click post button and after check your json</p>
               <button onClick={this.post} >Post</button>
           </div>
           <div>
               <p>click put button and after check your json data will be updated</p>
               <button onClick={this.put} >Put</button>
           </div>
           <div>
               <p>click Delete button and after check your json data will be deleted</p>
               <button onClick={this.delete} >Delete</button>
           </div>
            
        </div>)
    }
}
