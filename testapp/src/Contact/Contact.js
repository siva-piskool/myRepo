import React, { Component } from "react";
import './Contact.css';
class Contact extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
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
                          <div className="nav  navbar-expand">
                            <ul className="nav navbar-nav navbar-right">
                              <li className="pc-menu pc-menu1">
                              <a href="pc-about.html">About</a>
                              </li>
                              <li className="pc-menu pc-menu2">
                              <a href="pc-campus.html">Campus</a>
                              </li>
                              <li className="pc-menu pc-menu3">
                              <a href="pc-admissions.html">Admissions</a>
                              </li>
                              <li className="pc-menu pc-menu4">
                              <a href="pc-gallery.html">Gallery</a>
                              </li>
                              <li className="pc-menu pc-menu5 active"><a href="pc-contact.html">Contact</a></li>
                              <li className="dropdown pc-menu pc-menu0">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                              Parent<span className="caret" />
                              </a>
                                <ul className="dropdown-menu" role="menu">
                                  <li>
                                    <a href="pc-login.html">Login</a>
                                  </li>
                                  <li className="divider" />
                                  <li><a href="pc-register.html">Register for Student Talent Test</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          {/* /.navbar-collapse */} </div>
                        {/* /.container-fluid */} </nav>
                      <div className="container con pc-bg1">
                        <h1 className="pc-c1 ">Contact</h1>
                        <div className="row">
                          <div className="col-sm-6">
                            <h2 className="pc-c2 ">Pride International School, Chirala</h2>
                            <p>Sponsored by Oakridge Educational Society.<br />Karamchedu Road, Chirala, Prakasam District, Andhra Pradesh. PIN - 523155</p>
                            <h3 className="pc-c1 ">
                            <span className="pc-c6">Contact:</span> +91 9533 92 92 92 
                            <span className="pc-c6">|</span> 9533 93 93 93
                             <span className="pc-c6">|</span> 9533 94 94 94</h3>
                            <h3><span className="pc-c6">Email:</span>
                             <a className="pc-c2 details" href="mailto:info@PrideChirala.com">info@PrideChirala.com</a></h3>
                          </div>
                          <div className="col-sm-6">
                            <form className="form-horizontal">
                              <div className="form-group">
                                <label className="control-label col-sm-2">Name:</label>
                                <div className="col-sm-10">          
                                  <input type="text" className="form-control" id="focusedInput" placeholder="Enter Name" />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                  <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <hr />
                        <hr />
                      </div>
                      <div className="container-fluid pc-footer">
                        <p>Copyright © 2017 · All Rights Reserved · Pride International School, Chirala</p>
                      </div>
                      {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}  {/* Include all compiled plugins (below), or include individual files as needed */} {/*  */} 
                    </div>
              
        );
    }
};
export default Contact;