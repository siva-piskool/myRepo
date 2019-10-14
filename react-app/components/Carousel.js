import React,{Component} from 'react';
import {CarouselProvider,Slider, Slide,DotGroup} from 'pure-react-carousel';
import '../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import './carousel.css';
class Carousel extends Component{
    render(){
        return(<CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isPlaying={true}  >
        <Slider>
            <Slide index={0}><img src={require("./images/carousel-0.jpg")} />
           <DotGroup disableActiveDots={true} className="carousel_dot-group" ></DotGroup> </Slide>
            <Slide index={1} ><img src={require("./images/carousel-1.jpg")}/>
            <DotGroup disableActiveDots={true} className="carousel_dot-group"></DotGroup></Slide>
            <Slide index={2} ><img src={require("./images/carousel-2.jpg")} />
            <DotGroup disableActiveDots={true} className="carousel_dot-group"></DotGroup></Slide>
        </Slider>
    </CarouselProvider>)
    }
}
export default Carousel;