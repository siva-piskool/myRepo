import React,{Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
 class Navigation extends Component{
     render(){
         return(<Router>
    <div>
        <div className="navbar">
            <ul>
        <li>
        <NavLink to="/" activeClassName="active" >Icon</NavLink>
        </li>
           <li className="navs">
               <NavLink to="/services" activeClassName="active">Services</NavLink>
           </li>
           <li className="navs">
               <NavLink to="/contact" activeClassName="active">Contact</NavLink>
           </li>
           <li className="navs">
               <NavLink to="/about" activeClassName="active">About</NavLink>
           </li>
       </ul>
       </div>
      <hr/>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/services" component={Services} />
        </div>
    </Router>)
     }
 }
  class Home extends Component{
      render(){
          return(<div>
              Home
          </div>)
      }
  }
  class About extends Component{
    render(){
        return(<div>
           About
        </div>)
    }
}
class Contact extends Component{
    render(){
        return(<div>
            Contact
        </div>)
    }
}
class Services extends Component{
    render(){
        return(<div>
            Services
        </div>)
    }
}
 export default Navigation;