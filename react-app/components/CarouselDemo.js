import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
class CarouselDemo extends Component{
    render(){
        return(<Carousel>
            <div><img src={require("./images/carousel-0.jpg")} /></div>
            <div><img src={require("./images/carousel-1.jpg")} /></div>
            <div><img src={require("./images/carousel-2.jpg")} /></div>
        </Carousel>)
    }
}
export default CarouselDemo;