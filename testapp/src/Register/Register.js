import React, { Component } from "react";
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Register extends Component {
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
                            <img src={require("../images/logo-pc.png")} width={82} height={95} alt="" /></a> 
                            <a className="navbar-brand" href="index.html">
                                <p className="pride">Pride</p>
                                <p className="int-school">International</p>
                                <p className="int-school">School</p>
                            </a> </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="defaultNavbar1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="pc-menu pc-menu1"><a href="pc-about.html">About</a></li>
                                <li className="pc-menu pc-menu2"><a href="pc-campus.html">Campus</a></li>
                                <li className="pc-menu pc-menu3"><a href="pc-admissions.html">Admissions</a></li>
                                <li className="pc-menu pc-menu4"><a href="pc-gallery.html">Gallery</a></li>
                                <li className="pc-menu pc-menu5 active"><a href="pc-contact.html">Contact</a></li>
                                <li className="dropdown pc-menu pc-menu0"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Parent<span className="caret" /></a>
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
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h1 className="pc-c1">Student Talent Test Registration</h1>
                        </div>
                        <div className="col-md-10 col-md-offset-1">
                            <form className="form-horizontal">
                                <div className="col-md-8 col-md-offset-2 pc-txt1 pc-c2">Student Details:</div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Student Name:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="studentName" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Present Class &amp; School:</label>
                                    <div className="col-sm-4">
                                        <select className="form-control" id="presentClass">
                                            <option>New to School</option>
                                            <option>Pre-primary</option>
                                            <option>Primary</option>
                                            <option>Class-I</option>
                                            <option>Class-II</option>
                                            <option>Class-III</option>
                                            <option>Class-IV</option>
                                            <option>Class-V</option>
                                            <option>Class-VI</option>
                                            <option>Class-VII</option>
                                        </select>
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">AADHAAR Card Number:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" maxLength={12} id="adarCard" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Date of Birth:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="dateOfBirth" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="col-md-8 col-md-offset-2 pc-txt1 pc-c2">Parents or Attendant Details:</div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Father's (Attendent) Name:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="fatherName" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Father's Contact Number:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="fatherNum" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Father's E-mail ID:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="fatherMail" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Father's Occupation:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="fatherOcp" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Mother's Name:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="motherName" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Mother's Contact Number:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="motherNum" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Mother's E-mail ID:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="motherMail" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Mother's Occupation:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="motherOcp" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="col-md-8 col-md-offset-2 pc-txt1 pc-c2">Address for Communication:</div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">House No: or Street:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="houseNum" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Area or Village:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="areaVillage" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Town or City:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="townCity" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">State:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="stateCode" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">PIN Code:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="pinCode" placeholder="Required" />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="col-md-8 col-md-offset-2 pc-txt1 pc-c2">Administrator Check List:</div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Registration ID:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="regID" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Online Update Status:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="onlineStatus" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Verification Status:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="verifyStatus" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Exam Date Intimation Through:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="intimationStatus" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Mock-test Performed Status:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="mockStatus" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Online Exam Appeared On:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="examDate" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Exam Grade:</label>
                                    <div className="col-sm-4">
                                        <select className="form-control" id="examGrade">
                                            <option>Grade 'A'</option>
                                            <option>Grade 'B'</option>
                                            <option>Grade 'C'</option>
                                            <option>Not Selected</option>
                                        </select>
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Joining Status:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="joinStatus" placeholder />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4">Remarks:</label>
                                    <div className="col-sm-4">
                                        <textarea rows={5} className="form-control" id="remarks" placeholder defaultValue={""} />
                                    </div>
                                    <p className="col-sm-4 pc-c4">error...</p>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-4">
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pc-footer">
                    <p>Copyright © 2017 · All Rights Reserved · Pride International School, Chirala</p>
                </div>
                {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}  {/* Include all compiled plugins (below), or include individual files as needed */} {/*  */}
            </div>
        
        );
    }
};
export default Register;    