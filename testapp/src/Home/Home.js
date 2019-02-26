import React, { Component } from "react";
import Navigation from '../components/Navigation';
import './Home.css'
import App from '../App';
import App1 from '../App1';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navigation />
                <div className="container pc-bg1 paddingT">
                    <Carousel/>
                    <hr />
                   <App1/>
                    <hr />
                    <div className="row">
                        <div className="text-center col-md-12">
                            <div className="well">Preparing students for successful future!</div>
                        </div>
                    </div>
                    <br />
                    
                    <div>
                    <App />
                    </div>
                    <hr />
                </div>
                <Footer />
                {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}  {/* Include all compiled plugins (below), or include individual files as needed */}
                {/*  */}
            </div>
        );
    }
}
export default Home;