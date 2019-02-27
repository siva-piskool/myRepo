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

            </div>
        );
    }
};

export default ParentContact;