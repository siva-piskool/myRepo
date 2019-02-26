import React,{Component} from  'react';
import '../App.css';
class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid pc-footer">
            <p>Copyright © 2017 · All Rights Reserved · Pride International School, Chirala</p>
        </div>
        );


    }
};
export default Footer;