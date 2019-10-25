import React,{useState,useEffect} from 'react';
import {CarouselProvider,Slider, Slide} from 'pure-react-carousel';
import {Container,Row} from 'react-bootstrap';
export default function SlideShow(){
    const[slides,setSlide]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/slides')
        .then((response)=>response.json())
        .then((res)=>{setSlide(res)})
    })
    return(<Container>
        <Row>
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={10} isPlaying={true} interval={2000} visibleSlides={4}>
    <Slider>
        {slides.map(slide=>(
        <Slide key={slide.id} >
            <img className="w-100" src={require(`../../../images/Gallery-images/${slide.slide}.jpg`)} />
        </Slide>))} 
        </Slider>
    </CarouselProvider>
    </Row>
        </Container>
   )
}