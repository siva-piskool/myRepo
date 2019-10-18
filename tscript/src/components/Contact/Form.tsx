import * as React from 'react';
import Address from "../../common/Address";
import './Contact.css';
const Form:React.FC=()=>{
    return(
        <div className="pc-bg1 py-2 container">
        <h1 className="pc-c1">Contact</h1>
        <div className='row' >
        <div className="col-md-6">
        <Address/>
        </div>
        <div className="col-md-6">
        <form action="">
        <div className="form-group row" >
        <label className="col-md-2" htmlFor="name">Name:</label>
        <div className="col-md-10">
        <input type="text" className="form-control" placeholder="Enter your name" id="name" />
        </div>
        </div>
        <div className="form-group row" >
        <label className="col-md-2" htmlFor="email">Email:</label>
        <div className="col-md-10">
        <input type="text" className="form-control" placeholder="Enter your id" id="email" />
        </div>
       </div>
        <div className="form-group row" >
        <label className="col-md-2" htmlFor="number">Number:</label>
        <div className="col-md-10">
            <input type="text" className="form-control"placeholder="Enter Mobile or Landline Number" id="number" />
        </div>
       </div>
        <div className="form-group row" >
       <label className="col-md-2" htmlFor="query">Comments: </label>
       <div className="col-md-10"><textarea className="form-control" placeholder="Enter your query" id="query"></textarea></div>
        </div>
        </form>
        <div className="col-sm-10 btn-contact">
        <button className="btn pc-btn2 pc-p" >Submit</button>
        </div>
        </div>
       
    </div>
</div>)
    }
export default Form;