import * as React from 'react';
import './Enquiry.css';
import Address from '../../common/Address';

const Enquiry:React.FC=()=>{
    return( <div className="container pc-bg1 pb-1">
    <h1>Parent Enquiry</h1>
    <hr/>
<form action="">
<div className="form-group row">
<label htmlFor="SName" className="col-form-label col-md-2 offset-md-2">Student Name:</label>
<div className="col-md-4">
    <input type="text" placeholder="Enter Student Name" className="form-control" id="SName"/>
</div>
</div>
<div className="form-group row">
<label htmlFor="number" className="col-form-label col-md-2 offset-md-2"> Mobile Number:</label>
<div className="col-md-4">
    <input type="text" placeholder="Enter Mobile Number" className="form-control" id="number"/>
</div>
</div>
<div className="form-group row">
<label htmlFor="email" className="col-form-label col-md-2 offset-md-2"> Email:</label>
<div className="col-md-4">
    <input type="email" placeholder="Enter your email" className="form-control" id="email"/>
</div>
</div>
<div className="form-group row">
<label htmlFor="town" className="col-form-label col-md-2 offset-md-2">Village/Town:</label>
<div className="col-md-4">
    <input type="text" placeholder="Enter Village/Town" className="form-control" id="town"/>
</div>
</div>
<div className="form-group row">
<label className="col-form-label col-md-4 " />
<div className="offset-md-1">
<button type="button" className="pc-btn2 pc-wid1 col-md-8 ">Submit</button>
</div>
</div>
</form>
<hr/>
<div>
   <h1>Contact Info</h1> 
   <div className="col-md-12 pb-3" ><Address/></div>
   
</div>
    </div> )
}
export default Enquiry;