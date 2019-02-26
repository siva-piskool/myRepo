import React, { Component } from "react";
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StudentDetails extends Component {
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
                            <img src={require("../images/logo-pc.png")} width={82} height={95} alt /></a>
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
                                <li className="pc-menu pc-menu1"><a href="pc-login.html">Login</a></li>
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
                    <h1>Student Details</h1>
                    <hr />
                    <a href="#" title="Student Name (Pride ID: #####)" data-toggle="popover" data-content="Total Score: 25/50">Click to know score</a>
                    <hr />
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="col-sm-6 pc-txt2">Student Name:</div><div className="col-sm-6 pc-txt2 pc-c1">$$sName$$</div>
                            <div className="col-sm-6 pc-txt2">Pride ID:</div><div className="col-sm-6 pc-txt2 pc-c1">$$ID$$</div>
                            <div className="col-sm-6 pc-txt2">Present Class &amp; School:</div><div className="col-sm-6 pc-txt2 pc-c1">$$class-school$$</div>
                            <div className="col-sm-6 pc-txt2">Enterence Test For Class:</div><div className="col-sm-6 pc-txt2 pc-c1">$$goingClass$$</div>
                        </div>
                        <div className="col-sm-4">
                            <br />
                            <button type="button" className="pc-btn1 pc-wid1">Practice Test</button>
                            <br /><br />
                            <button type="button" className="pc-btn2 pc-wid1">Entrance Test</button>
                        </div>
                    </div>
                    <hr />
                    <h1>Entrance Test Results</h1><p>Test Performed Date: <span className="pc-c4">05-May-2017</span></p>
                    <table className="table table-striped table-bordered" cellSpacing={0} width="100%">
                        <thead>
                            <tr>
                                <th>Name of the Subject</th>
                                <th>Total Questions Attempted</th>
                                <th>Total Correct Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Englisth</td>
                                <td>-N/A-</td>
                                <td>-N/A-</td>
                            </tr>
                            <tr>
                                <td>General Knowledge</td>
                                <td>-N/A-</td>
                                <td>-N/A-</td>
                            </tr>
                            <tr>
                                <td>Mathematics</td>
                                <td>-N/A-</td>
                                <td>-N/A-</td>
                            </tr>
                            <tr>
                                <td>Social Sciences</td>
                                <td>-N/A-</td>
                                <td>-N/A-</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h1>Practice Test(s) Results</h1>
                    <table className="table table-striped table-bordered" cellSpacing={0} width="100%">
                        <thead>
                            <tr>
                                <th>Practice Test Number</th>
                                <th>Practice Test Performed Date</th>
                                <th>Total Questions Attempted</th>
                                <th>Total Correct Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Practice Test-1</td>
                                <td>-N/A-</td>
                                <td>-N/A-</td>
                                <td>-N/A-</td>
                            </tr>
                        </tbody>
                    </table>
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
export default StudentDetails;