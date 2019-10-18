import React,{Component} from 'react';
 interface IProps{
     msg:string
 }
 interface IState{
    empid:number
 }
 class Test extends Component<IProps,IState>{
     state:IState;
     constructor(props:IProps){
         super(props);
         this.state={empid:0};
}
render(){
    return(<div>
        <h1>{this.state.empid}</h1>
        <p>{this.props.msg}</p>
    </div>)
}
 }
 export default Test;