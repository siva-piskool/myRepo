import React, { Component } from "react";
class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: ''
    }
   
}
// creating Get Request
componentDidMount(){
      fetch("http://localhost:3000/data") //fetches the url
      .then((response) =>response.json()) //converts response into json 
      .then((res)=>{                    //accessing data from the server
          this.setState({id:res.id,
        name:res.name})
      })
      .catch((error)=>{
        console.log(error)
    });
  }
render() {
    return (
      <div>
     <p>Employee id:{this.state.id}</p>   {/*data from the server*/}
     <p>Employee name:{this.state.name}</p>
     </div>
    );
  }
}
export default Get;
