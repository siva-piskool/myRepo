import React, { Component } from "react";
import '../css/style.css';
import'./Admission.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/popper.js/dist/popper.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
class Admission extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
               <nav className="navbar navbar-default">
                    <div className="container"> {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed top-tric1" data-toggle="collapse" data-target="#defaultNavbar1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={require("../images/logo-pc.png")} width={82} height={95} alt="pc" /></a> 
                                <a className="navbar-brand" href="index.html">
                                <p className="pride">Pride</p>
                                <p className="int-school">International</p>
                                <p className="int-school">School</p>
                            </a> </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div >
                            <ul className="nav navbar-expand navbar-right">
                                <li className="pc-menu pc-menu1"><a href="pc-about.html">About</a></li>
                                <li className="pc-menu pc-menu2"><a href="pc-campus.html">Campus</a></li>
                                <li className="pc-menu pc-menu3 active"><a href="pc-admissions.html">Admissions</a></li>
                                <li className="pc-menu pc-menu4"><a href="pc-gallery.html">Gallery</a></li>
                                <li className="pc-menu pc-menu5"><a href="pc-contact.html">Contact</a></li>
                                <li className="dropdown pc-menu pc-menu0">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Parent
                                    <span className="caret" /></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="pc-login.html">Login</a></li>
                                        <li className="divider" />
                                        <li><a href="pc-register.html">Register for Student Talent Test</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */} </div>
                    {/* /.container-fluid */} </nav>
                <div className="container pc-bg1">
                    <h1 className="pc-c1">Admissions</h1>
                    <img src={require("../images/pc-admissions.jpg")} className="img-rounded img-responsive" alt="Placeholder image" />
                    <hr />
                    <p className="pc-p1">Thank you for showing interest in Pride International School, Chirala. We are offering admissions LGK to VIII Grade for academic year 2017-18. Will conduct online <span className="pc-c1">STUDENT TALENT TEST</span> for students going for I to IV , students going for V to VIII Grade and students going for LKG and UKG. Exam dates will be published soon.</p>
                    <hr />
                    <button type="button" className="btn btn-lg btn-primary">Register for Student Talent Test</button>
                    <hr />
                </div>
                <div className="container-fluid pc-footer">
                    <p>Copyright © 2017 · All Rights Reserved · Pride International School, Chirala</p>
                </div>
                {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
                {/* Include all compiled plugins (below), or include individual files as needed */} {/*  */}
            </div>
        );
    }

};
export default Admission;