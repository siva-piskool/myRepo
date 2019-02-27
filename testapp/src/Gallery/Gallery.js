import React, { Component } from 'react';
import './Gallery.css';
import Navigation from '../components/Navigation';

class Gallery extends Component {
    render() {
        return (
            


                <div className="container content pc-bg1">
                    <h1 className="pc-c1">Gallery</h1>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#menu1">Videos</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="home" className=" tab-pane active">
                            <h3 className="text">Photo gallery will start from 10<sup>th</sup> June, 2017</h3>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            <h3 className="text">Video gallery will start from 10<sup>th</sup> June, 2017</h3>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr className="hz" />
                </div>

                
        );
    }

};

export default Gallery;
