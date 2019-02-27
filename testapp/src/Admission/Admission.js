import React, { Component } from "react";
import './Admission.css'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
class Admission extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            

                <div className="container pc-bg1">
                    <h1 className="pc-c1">Admissions</h1>
                    <img src={require("../images/pc-admissions.jpg")} className="img-rounded img-responsive" alt="Placeholder image" />
                    <hr />
                    <p className="pc-p1">Thank you for showing interest in Pride International School, Chirala. We are offering admissions LGK to VIII Grade for academic year 2017-18. Will conduct online <span className="pc-c1">STUDENT TALENT TEST</span> for students going for I to IV , students going for V to VIII Grade and students going for LKG and UKG. Exam dates will be published soon.</p>
                    <hr />
                    <button type="button" className="btn btn-lg btn-primary">Register for Student Talent Test</button>
                    <hr />
                </div>

           
        );
    }

};
export default Admission;