import React from 'react';

class Post extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        id:8,
        name:"kohli"
      }
      this.onChange=this.onChange.bind(this);
   };
   onChange(e){
     this.setState({id:e.target.value,name:e.target.value});
   }
  submit(){
 fetch('http://localhost:3000/data',{
       method:"POST",
         headers:{
           Accept: 'application/json',
          'Content-Type': 'application/json',
       }, 
       body:JSON.stringify(this.state)     
     });
     }
   render() {
      return (
         <div>
           <input type ="text" value={this.state.name} onChange={this.onChange} />
            <button onClick={this.submit}>Post</button>
            <p>Name:{this.state.name}</p>
            <p>Id:{this.state.id}</p>
         </div>
      );
   }
}
export default Post;