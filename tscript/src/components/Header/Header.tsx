import * as React from 'react';
export interface FormProps{
    id:string
}
export interface FormState{}

class Header extends React.Component<FormProps,FormState>{
   render(){
        return(<div>
<p className="mt-4 bg-success">id:{this.props.id}</p>
        </div>)
    }
}
export default Header;