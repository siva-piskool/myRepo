import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './GallerySlider.css';

class GallerySlider extends Component{
    constructor(props){
        super(props);
        this.state ={
            images:[
                {
                    image: 'pic_01',
                    altTxt: 'pic 1'
                },
                {
                    image: 'pic_02',
                    altTxt: 'pic 2'
                },
                {
                    image: 'pic_03',
                    altTxt: 'pic 3'
                },
                {
                    image: 'pic_04',
                    altTxt: 'pic 4'
                },
                {
                    image: 'pic_05',
                    altTxt: 'pic 5'
                },
                {
                    image: 'pic_06',
                    altTxt: 'pic 6'
                },
                {
                    image: 'pic_07',
                    altTxt: 'pic 7'
                },
                {
                    image: 'pic_08',
                    altTxt: 'pic 8'
                },
                {
                    image: 'pic_09',
                    altTxt: 'pic 9'
                },
                {
                    image: 'pic_10',
                    altTxt: 'pic 10'
                },
            ]
        }
    }
    render(){
            const settings = {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [
                    {
                      breakpoint: 991,
                      settings: {
                                  slidesToShow: 2
                                }
                    },
                    {
                      breakpoint: 520,
                      settings: {
                                  slidesToShow: 1
                                }
                    }
                ]
            };
            return(
                <div className='container'>
                    <Slider {...settings}>
                    {this.state.images.map((item, index) => {
                            return(
                               <div>
                                  <img src={require(`../../images/gallery/${item.image}.jpg`)} alt={item.altTxt} className='img-fluid border-dark' />
                               </div>
                            )}
                    )}
                    </Slider>
                </div>
            )
        }
   }   

export default GallerySlider;