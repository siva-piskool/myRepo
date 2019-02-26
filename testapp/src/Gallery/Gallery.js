import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-default">
                    <div className="container"> {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed top-tric1" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
                            <a className="navbar-brand" href="index.html">
                            <img src={require("../images/logo-pc.png")} width={82} height={95} alt="pc" /></a> <a className="navbar-brand" href="index.html">
                                <p className="pride">Pride</p>
                                <p className="int-school">International</p>
                                <p className="int-school">School</p>
                            </a> </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="nav navbar-expand">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="pc-menu pc-menu1"
                                ><a href="pc-about.html">About</a>
                                </li>
                                <li className="pc-menu pc-menu2">
                                <a href="pc-campus.html">Campus</a>
                                </li>
                                <li className="pc-menu pc-menu3">
                                <a href="pc-admissions.html">Admissions</a>
                                </li>
                                <li className="pc-menu pc-menu4 active">
                                <a href="pc-gallery.html">Gallery</a>
                                </li>
                                <li className="pc-menu pc-menu5">
                                <a href="pc-contact.html">Contact</a>
                                </li>
                                <li className="dropdown pc-menu pc-menu0">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                Parent<span className="caret" />
                                </a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="pc-login.html">Login</a></li>
                                        <li className="divider" />
                                        <li>
                                            <a href="pc-register.html">Register for Student Talent Test</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */} </div>
                    {/* /.container-fluid */} </nav>
                <div className="container content pc-bg1">
                    <h1 className="pc-c1">Gallery</h1>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                        <a className="nav-link active" href="#home">Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#menu1">Videos</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="home" className=" tab-pane active">
                            <h3 className="text">Photo gallery will start from 10<sup>th</sup> June, 2017</h3>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            <h3 className="text">Video gallery will start from 10<sup>th</sup> June, 2017</h3>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr className="hz" />
                </div>
                <div className="container-fluid pc-footer">
                    <p>Copyright © 2017 · All Rights Reserved · Pride International School, Chirala</p>
                </div>
                {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}  {/* Include all compiled plugins (below), or include individual files as needed */} {/*  */}
            </div>
        );
    }

};

export default Gallery;
