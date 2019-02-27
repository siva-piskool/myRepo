import React, { Component } from "react";
import Navigation from '../components/Navigation';
import './Home.css'
import Panel from './Panel';
import ImgGallery from './ImgGallery';
import Footer from '../components/Footer';
import Carousel from './Carousel';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="container pc-bg1 paddingT">
                <Carousel />
                <hr />
                <ImgGallery />
                <hr />
                <div className="row">
                    <div className="text-center col-md-12">
                        <div className="well">Preparing students for successful future!</div>
                    </div>
                </div>
                <br />

                <div>
                    <Panel />
                </div>
                <hr />
            </div>

        );
    }
}
export default Home;