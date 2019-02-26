import React, { Component } from "react";
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Question extends Component {
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
                                    <img src={require("../images/logo-pc.png")}width={82} height={95} alt="pc" /></a> 
                                    <a className="navbar-brand" href="index.html">
                                        <p className="pride">Pride</p>
                                        <p className="int-school">International</p>
                                        <p className="int-school">School</p>
                                    </a> </div>
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
                                        <li className="pc-menu-s pc-menu-s1">
                                        <a href="images/PrideBrochure_v1.pdf">Brochure</a>
                                        </li>
                                        <li className="pc-menu-s pc-menu-s1">
                                        <a href="#">Students List</a>
                                        </li>
                                        <li className="pc-menu-s pc-menu-s1">
                                        <a href="#">Add Question</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /.navbar-collapse */} </div>
                            {/* /.container-fluid */} </nav>
                        <div className="container pc-bg1">
                            <h1>Add Question</h1>
                            <hr />
                            <div className="col-sm-12">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Class:</label>
                                        <div className="col-sm-3">
                                            <select className="form-control" id="selectClass">
                                                <option>UKG</option>
                                                <option>Class-I</option>
                                                <option>Class-II</option>
                                                <option>Class-III</option>
                                                <option>Class-IV</option>
                                                <option>Class-V</option>
                                                <option>Class-VI</option>
                                                <option>Class-VII</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Subject:</label>
                                        <div className="col-sm-3">
                                            <select className="form-control" id="selectSubject">
                                                <option>English</option>
                                                <option>GK</option>
                                                <option>Maths</option>
                                                <option>Social Science</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Question:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="testQuestion" placeholder="Please Enter Question" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Option (A):</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="optionA" placeholder="Please Enter Question" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Option (B):</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="optionB" placeholder="Please Enter Question" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Option (C):</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="optionC" placeholder="Please Enter Question" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Option (D):</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="optionD" placeholder="Please Enter Question" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Answer:</label>
                                        <div className="col-sm-3">
                                            <select className="form-control" id="selectAnswer">
                                                <option>(A)</option>
                                                <option>(B)</option>
                                                <option>(C)</option>
                                                <option>(D)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" />
                                        <div className="col-sm-10">
                                            <button type="button" className="pc-btn1 pc-wid1">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            &nbsp;
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
export default Question;