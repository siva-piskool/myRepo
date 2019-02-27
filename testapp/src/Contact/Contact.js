import React, { Component } from "react";
import './Contact.css';
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (


      <div className="container con pc-bg1">
        <h1 className="pc-c1">Contact</h1>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="pc-c2">Pride International School, Chirala</h2>
            <p>Sponsored by Oakridge Educational Society.<br />Karamchedu Road, Chirala, Prakasam District, Andhra Pradesh. PIN - 523155</p>
            <h3 className="pc-c1">
              <span className="pc-c6">Contact:</span> +91 9533 92 92 92
                            <span className="pc-c6">|</span> 9533 93 93 93
                             <span className="pc-c6">|</span> 9533 94 94 94</h3>
            <h3><span className="pc-c6">Email:</span>
              <a className="pc-c2 details" href="mailto:info@PrideChirala.com">info@PrideChirala.com</a></h3>
          </div>
          <div className="col-sm-6">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-sm-2">Name:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="focusedInput" placeholder="Enter Name" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <hr />
      </div>
      
                      
        );
  }
};
export default Contact;