import React, { Component } from 'react';
import '../css/style.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default">
                <div className="container pc-bg1">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img Style={"float: left"} src={require("../images/logo-pc.png")} width={82} height={95} alt="pc" />
                            <p className="pride">Pride</p>
                            <p className="int-school">International</p>
                            <p className="int-school">School</p>
                        </a>
                    </div>
                    <button className="navbar-toggler top-tric1 collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="nav navbar-nav ml-auto nav3">
                            <li className="nav-item pc-menu pc-menu0 active">
                                <a className="nav-link text-white" href="#">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item pc-menu pc-menu0">
                                <a className="nav-link text-white" href="#">Campus</a>
                            </li>
                            <li className="nav-item pc-menu pc-menu0">
                                <a className="nav-link text-white" href="sobrenatural.html">Admission</a>
                            </li>
                            <li className="nav-item pc-menu pc-menu0">
                                <a className="nav-link text-white" href="sobrenatural.html">Gallery</a>
                            </li>
                            <li className="nav-item pc-menu pc-menu0">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            <li className="nav-item pc-menu pc-menu1">
                                <a className="nav-link text-white" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                     <div className="collapse navbar-collapse nav2">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item pc-menu pc-menu1">
                                <a className="nav-link text-white" href="#">Brochure</a>
                            </li>
                            <li className="nav-item  pc-menu pc-menu1">
                                <a className="nav-link text-white" href="#">Enquiry Form</a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
            
        );
    }
};
export default Navigation;