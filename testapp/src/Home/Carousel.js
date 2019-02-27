import React,{Component} from 'react';
import '../App.css'
class Carousel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return( 
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active"></li>
                <li data-target="#demo" data-slide-to={1}></li>
                <li data-target="#demo" data-slide-to={2}></li>
                <li data-target="#demo" data-slide-to={3}></li>
                <li data-target="#demo" data-slide-to={4}></li>
                <li data-target="#demo" data-slide-to={5}></li>
            </ul>
            <div className="carousel-inner" role='listbox'>
                <div className="carousel-item active">
                    <span className="swiper-pagination-bullets"></span>
                    <img src={require("../images/carousel-0.jpg")} alt="First slide " className="center-block" />
                </div>
                <div className="carousel-item">
                    <img src={require("../images/carousel-1.jpg")} alt="Second slide " className="center-block" />
                </div>
                <div className="carousel-item">
                    <img src={require("../images/carousel-2.jpg")} alt="Third slide " className="center-block" />
                </div>
                <div className="carousel-item ">
                    <img src={require("../images/carousel-3.jpg")} alt="Fourth slide " className="center-block" />
                </div>
                <div className="carousel-item">
                    <img src={require("../images/carousel-4.jpg")} alt="Fifth slide " className="center-block" />
                </div>
                <div className="carousel-item">
                    <img src={require("../images/carousel-5.jpg")} alt="Sixth slide " className="center-block" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>);
    }
};
export default Carousel;