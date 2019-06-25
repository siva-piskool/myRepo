import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Carousel.css';

class CarouselPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
              activeIndex: 0,
              carouselItems:[
                  {
                    "src": "carousel-0",
                    "captionHead": "head1",
                    "captionTxt": "body1",
                    "altText": "First Slide"
                  },
                  {
                    "src": "carousel-1",
                    "captionHead": "head2",
                    "captionTxt": "body2",
                    "altText": "Second Slide"
                  },
                  {
                    "src": "carousel-2",
                    "captionHead": "head3",
                    "captionTxt": "body3",
                    "altText": "Third Slide"
                  },
                  {
                    "src": "carousel-3",
                    "captionHead": "head4",
                    "captionTxt": "body4",
                    "altText": "Fourth Slide"
                  },
                  {
                    "src": "carousel-4",
                    "captionHead": "head5",
                    "captionTxt": "body5",
                    "altText": "Fifth Slide"
                  }
              ]
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.carouselItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.carouselItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = this.state.carouselItems.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={require(`../../images/${item.src}.jpg`)} alt={item.altText} className='img-fluid' />
                    <CarouselCaption captionText={item.captionTxt} captionHeader={item.captionHead} />
                </CarouselItem>
            );
        });

        return (
            <div className='container'>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={this.state.carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default CarouselPage;    