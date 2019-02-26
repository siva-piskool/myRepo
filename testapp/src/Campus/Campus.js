import React, { Component } from 'react';
import '../Campus/Campus.css';
class Campus extends Component {
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
              <ul className="nav navbar-nav navbar-expand navbar-right">
                <li className="pc-menu pc-menu1"><a href="pc-about.html">About</a></li>
                <li className="pc-menu pc-menu2 active"><a href="pc-campus.html">Campus</a></li>
                <li className="pc-menu pc-menu3"><a href="pc-admissions.html">Admissions</a></li>
                <li className="pc-menu pc-menu4"><a href="pc-gallery.html">Gallery</a></li>
                <li className="pc-menu pc-menu5"><a href="pc-contact.html">Contact</a></li>
                <li className="dropdown pc-menu pc-menu0">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Parent
                <span className="caret" /></a>
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
        <div className="container campus pc-bg1">
          <h1 className="pc-c1">Campus</h1>
          <p className="pc-p1"><a href="#" data-toggle="tooltip" data-placement="top" title="Notable Indian Nobel Laureate for Physics, known for discovery of Raman Effect">Sir CV Raman</a> Campus, is our state-of-the-art campus located in Karamchedu Road, Chirala with a huge spread across 4.5 Acres. One of the best international schools in Prakasm District, Andhra Pradesh.</p>
          <p className="pc-p1">The curriculum followed here is the CBSE and CBSE-I from Grade-I to Grade-XII. The world-class teaching faculty at Pride International School offers a progressive teaching experience to the students, creating strong individuals.</p>
          <p className="pc-p1">State-of-art Indoor and Outdoor Amenities – Cricket Ground, Soccer Ground, Race Court, Tennis Courts, Swimming Pool, Table Tennis, Amphitheatre, Digital Auditorium, World-class Labs, Resource Centre, World-class Library with wide collection of books, Audio and Visual Rooms.</p>
          <h3 className="pc-c2">Campus Outlook</h3>
          <img src={require("../images/pc-campus.jpg")} className="img-rounded img-responsive" alt="Placeholder image" />
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
}
export default Campus;
