import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.state={
            items:[
                
                {
                    path: "/About",
                    text: 'About',
                    class:'pc-menu pc-menu0',
                },
                {
                    path: "/Campus",
                    text: 'Campus',
                    class:'pc-menu pc-menu0',
                },
                {
                    path: "/Admissions",
                    text: 'Admission',
                    class:'pc-menu pc-menu0',
                },

                {
                    path: "/Gallery",
                    text: 'Gallery',
                    class:'pc-menu pc-menu0',
                },
                {
                    path: "/Contact",
                    text: 'Contact',
                    class:'pc-menu pc-menu0',
                },
                {
                    path: "/Login",
                    text: 'Login',
                    class:'pc-menu pc-menu1',
                },
                {
                    path: "/Brochure",
                    text: 'Brochure',
                    class:'pc-menu-s pc-menu-s1 nav2',
                },
                {
                    path: "/EnquiryForm",
                    text: 'EnquiryForm',
                    class:'pc-menu-s pc-menu-s1 nav2',
                },
            ],
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default">
                <div className="container pc-bg1">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/'>
                            <img Style={"float: left"} src={require("../images/logo-pc.png")} width={82} height={95} alt="pc" />
                            <p className="pride">Pride</p>
                            <p className="int-school">International</p>
                            <p className="int-school">School</p>
                        </Link>
                    </div>
                    <button className="navbar-toggler top-tric1 collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                   
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="nav navbar-nav ml-auto nav3">
                        {
                                    this.state.items.map((route, index) => (
                                        <li className={`nav-item ${route.class} active`}>
                                            <Link className="nav-link" to={route.path}>{route.text}</Link>
                                        </li>
                                    ))
                                }
                        </ul>
                    </div>
                     
                </div>
            </nav>
            
        );
    }
};
export default Navigation;