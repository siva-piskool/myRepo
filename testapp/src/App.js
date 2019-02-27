import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Campus from './Campus/Campus';
import Admission from './Admission/Admission';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Brochure from './images/PrideBrochure_v1.pdf';
import EnquiryForm from './ParentContact/ParentContact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                {
                    path: "/About",
                    component: About,
                },
                {
                    path: "/Campus",
                    component: Campus,
                },
                {
                    path: "/Admissions",
                    component: Admission,
                },

                {
                    path: "/Gallery",
                    component: Gallery,
                },
                {
                    path: "/Contact",
                    component: Contact,
                },
                {
                    path: "/Login",
                    component: Login,
                },
                {
                    path: "/Brochure",
                    component: Brochure,
                },
                {
                    path: "/EnquiryForm",
                    component: EnquiryForm,
                },
            ]
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Route exact path='/' component={Home} />
                    {
                        this.state.routes.map((route, index) => {
                            return(
                                <Route path={`${route.path}`} component={route.component} />
                            )
                        })
                    }
                    <Footer />
                </div >
            </Router>
        );

    }
}

export default hot(module)(App);
