import React, { Component } from 'react';
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class ParentContact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           
             <div>
                        <meta charSet="utf-8" />
                        <nav className="navbar navbar-default">
                            <div className="container"> {/* Brand and toggle get grouped for better mobile display */}
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed top-tric1" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
                                    <a className="navbar-brand" href="index.html">
                                    <img src={require("../images/logo-pc.png")} width={82} height={95} alt="pc" /></a>
                                     <a className="navbar-brand" href="index.html">
                                        <p className="pride">Pride</p>
                                        <p className="int-school">International</p>
                                        <p className="int-school">School</p>
                                    </a>
                                     </div>
                                {/* Collect the nav links, forms, and other content for toggling */}
                                <div className="collapse navbar-collapse" id="defaultNavbar1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="pc-menu pc-menu0"><a href="pc-about.html">About</a></li>
                                        <li className="pc-menu pc-menu0"><a href="pc-campus.html">Campus</a></li>
                                        <li className="pc-menu pc-menu0"><a href="pc-admissions.html">Admissions</a></li>
                                        <li className="pc-menu pc-menu0"><a href="pc-gallery.html">Gallery</a></li>
                                        <li className="pc-menu pc-menu0"><a href="pc-contact.html">Contact</a></li>
                                        <li className="pc-menu pc-menu1"><a href="pc-login.html">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="pc-menu-s pc-menu-s1"><a href="images/PrideBrochure_v1.pdf">Brochure</a></li>
                                        <li className="pc-menu-s pc-menu-s1"><a href="#">Parent Enquiry</a></li>
                                        <li className="pc-menu-s pc-menu-s1"><a href="#">Student Details</a></li>
                                    </ul>
                                </div>
                                {/* /.navbar-collapse */} </div>
                            {/* /.container-fluid */} </nav>
                        <div className="container pc-bg1">
                            <h1>Parent Enquiry</h1>
                            <hr />
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Student Name:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" required id="eqStudentName" placeholder="Please Enter Student Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Mobile Number:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" required id="eqMobileNumber" placeholder="Please Enter Mobile Number" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Email:</label>
                                    <div className="col-sm-4">
                                        <input type="email" className="form-control" required id="eqEmail" placeholder="Please Enter Email Address" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Village / Town:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" required id="eqAreaName" placeholder="Please Enter Area Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" />
                                    <div className="col-sm-8">
                                        <p className="pc-c4">Error Msg...</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" />
                                    <div className="col-sm-8">
                                        <button type="button" className="pc-btn2 pc-wid1">Submit</button>
                                    </div>
                                </div>
                            </form>
                            <hr />
                        </div>
                        <div className="container pc-bg1">
                            <h1>Contact Info</h1>
                            <div className="col-sm-12">
                                <h2 className="pc-c2">Pride International School, Chirala</h2>
                                <p>Sponsored by Oakridge Educational Society.<br />Karamchedu Road, Chirala, Prakasam District, Andhra Pradesh. PIN - 523155</p>
                                <h3 className="pc-c1"><span className="pc-c6">Contact:</span> +91 9533 92 92 92 <span className="pc-c6">|</span> 9533 93 93 93 <span className="pc-c6">|</span> 9533 94 94 94</h3>
                                <h3><span className="pc-c6">Email:</span> <a className="pc-c2" href="mailto:info@PrideChirala.com">info@PrideChirala.com</a></h3>
                            </div>
                            <p>&nbsp;</p>
                            <hr />
                        </div>
                        <div className="container-fluid pc-footer">
                            <p>Copyright © 2017 · All Rights Reserved · Pride International School, Chirala</p>
                        </div>
                        {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}  {/* Include all compiled plugins (below), or include individual files as needed */}
                        {/*  */}
                    </div>
                );
            }
        };
   
export default ParentContact;