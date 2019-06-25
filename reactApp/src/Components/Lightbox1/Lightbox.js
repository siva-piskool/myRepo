import React,{Component} from 'react';
import Gallery from 'react-grid-gallery';
import './Lightbox.css';
const IMAGES = [
    {
        src: require('../../images/gallery/pic_01.jpg'),
        thumbnail: require('../../images/gallery/pic_01.jpg'),
        caption: "Caption1",
       enableLightbox:"true"
    },
    {
        src: require('../../images/gallery/pic_02.jpg'),
        thumbnail: require('../../images/gallery/pic_02.jpg'),
        caption: "Caption2"
    },
    {
        src: require('../../images/gallery/pic_03.jpg'),
        thumbnail: require('../../images/gallery/pic_03.jpg'),
        caption: "Caption3"
    },
    {
        src: require('../../images/gallery/pic_04.jpg'),
        thumbnail: require('../../images/gallery/pic_04.jpg'),
        caption: "Caption4",
       enableLightbox:"true"
    },
    {
        src: require('../../images/gallery/pic_05.jpg'),
        thumbnail: require('../../images/gallery/pic_05.jpg'),
        caption: "Caption5"
    },
    {
        src: require('../../images/gallery/pic_06.jpg'),
        thumbnail: require('../../images/gallery/pic_06.jpg'),
        caption: "Caption6"
    },
    {
        src: require('../../images/gallery/pic_07.jpg'),
        thumbnail: require('../../images/gallery/pic_07.jpg'),
        caption: "Caption7",
       enableLightbox:"true"
    },
    {
        src: require('../../images/gallery/pic_08.jpg'),
        thumbnail: require('../../images/gallery/pic_08.jpg'),
        caption: "Caption8"
    },
    {
        src: require('../../images/gallery/pic_09.jpg'),
        thumbnail: require('../../images/gallery/pic_09.jpg'),
        caption: "Caption9"
    },
    {
        src: require('../../images/gallery/pic_10.jpg'),
        thumbnail: require('../../images/gallery/pic_10.jpg'),
        caption: "Caption10",
    },
  ];
class Lightbox extends Component{
        
    
    render(){
            return(
                <div className="container">
                <Gallery images={IMAGES} enableImageSelection={false} showImageCount={false}  />
                </div>
            )
    }
};
export default Lightbox;