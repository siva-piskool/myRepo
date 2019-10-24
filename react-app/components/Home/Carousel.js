import React, { useState } from 'react';
import './Carousel.css';
import {Carousel} from 'react-bootstrap';
export default function HomeCarousel(){
    const[index,setIndex]=useState(0);
    const[direction,setDirection]=useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
      };
    
    return(<Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
<Carousel.Item>
    <img className="d-block w-100" src={require('../../images/carousel-0.jpg')} />
   <Carousel.Caption>
   Study, because they can never take it away from you.
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img className="d-block w-100" src={require('../../images/carousel-1.jpg')} />
    <Carousel.Caption>
    Science! if you have the conditions, you get the result.
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img className="d-block w-100" src={require('../../images/carousel-2.jpg')} />
    <Carousel.Caption>
    We create light through knowledge, students will find the way.
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img className="d-block w-100" src={require('../../images/carousel-3.jpg')} />
    <Carousel.Caption>
    We provide what students will like!
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img className="d-block w-100" src={require('../../images/carousel-4.jpg')} />
    <Carousel.Caption>
    We develop a passion for learning.
    </Carousel.Caption>
</Carousel.Item>
    </Carousel>)
}