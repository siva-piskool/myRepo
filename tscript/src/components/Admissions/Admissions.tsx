import * as React from 'react';
import{Link, BrowserRouter} from 'react-router-dom';
import './Admission.css';

const Admissions:React.FC=()=>{
    return(<BrowserRouter>
    <div className="container pc-bg1 pb-1">
    <h1 className="pc-c1">Admissions</h1>
    <img src={require("../../../images/pc-admissions.jpg")} className="img-fluid rounded" alt="Placeholder" />
    <hr />
    <p className="pc-p1">Thank you for showing interest in Pride International School, Chirala. We are offering admissions LGK to VIII Grade for academic year 2017-18. Will conduct online <span className="pc-c1">STUDENT TALENT TEST</span> for students going for I to IV , students going for V to VIII Grade and students going for LKG and UKG. Exam dates will be published soon.</p>
    <hr />
    <Link to="/enquiryform">
    <button type="button" className="btn btn-lg btn-primary">Enquiry Form</button>
    </Link>
    
    <hr />
</div>
</BrowserRouter>)
}
export default Admissions;