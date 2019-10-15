import * as React from 'react';
import {
    NavLink, BrowserRouter
} from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
    return (<BrowserRouter> <header>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="col">
                    <div className="row p-relative">
                        <div data-toggle="collapse" data-target=".navbar-collapse.show">
                            <NavLink className="navbar-brand mt-6 " to="/">
                                <img className="b-none" src={require('../../images/logo-pc.png')} alt="logo" />
                            </NavLink>
                        </div>
                        <div data-toggle="collapse" data-target=".navbar-collapse.show">
                            <NavLink className="navbar-brand mt-6" to="/">
                                <p className="pride">Pride</p>
                                <p className="int-school">International</p>
                                <p className="int-school school">School</p>
                            </NavLink>
                        </div>
                        <button className="navbar-toggler outline-none btn-position" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto mb2 responsive">
                                <li className="nav-item pc-menu pc-menu0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <NavLink className="nav-link text-white" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item pc-menu pc-menu0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <NavLink className="nav-link text-white" to="/campus">Campus</NavLink>
                                </li>
                                <li className="nav-item pc-menu pc-menu0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <NavLink className="nav-link text-white" to="/admissions">Admissions</NavLink>
                                </li>
                                <li className="nav-item pc-menu pc-menu0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <NavLink className="nav-link text-white" to="/gallery">Gallery</NavLink>
                                </li>
                                <li className="nav-item pc-menu pc-menu0" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav className='navbar navbar-expand-md navbar-light pr-0'>
                        <ul className="navbar-nav ml-auto row justify-content-end d-none-768">
                        <li className="nav-item pc-menu-s">
                                        <a className="nav-link text-white" href={require('../../images/PrideBrochure_v1.pdf')} title='Brochure' target='_blank' rel="noopener noreferrer">Brochure</a>
                                    </li>   
                            <li className="nav-item pc-menu-s">
                                <NavLink className="nav-link text-white" to="/enquiry-form">Enquiry Form</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    </header></BrowserRouter>
           
    );
};

export default Header;