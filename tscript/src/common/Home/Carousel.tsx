import * as React from 'react';
const Carousel:React.FC=()=>{
    return(<React.Fragment>
<div id="demo" className="carousel carousel-fade slide" data-ride="carousel">
<ul className="carousel-indicators">
<li data-target="#demo" data-slide-to="0" className="active"></li>
<li data-target="#demo" data-slide-to="1" ></li>
<li data-target="#demo" data-slide-to="2" ></li>
<li data-target="#demo" data-slide-to="3" ></li>
<li data-target="#demo" data-slide-to="4" ></li>
</ul>
<div className="carousel-inner">
<div className="carousel-item active" >
<img src={require('../../../images/carousel-0.jpg')} alt=""/>
<div className="carousel-caption">
<h3>Study, because they can never take it away from you.</h3>
</div>
</div>
<div className="carousel-item " >
<img src={require('../../../images/carousel-1.jpg')} alt=""/>
<div className="carousel-caption">
<h3>Science! if you have the conditions, you get the result.</h3>
</div>
</div>
<div className="carousel-item " >
<img src={require('../../../images/carousel-2.jpg')} alt=""/>
<div className="carousel-caption">
<h3>We create light through knowledge, students will find the way.</h3>
</div>
</div>
<div className="carousel-item " >
<img src={require('../../../images/carousel-3.jpg')} alt=""/>
<div className="carousel-caption">
<h3>We provide what students will like!</h3>
</div>
</div>
<div className="carousel-item " >
<img src={require('../../../images/carousel-4.jpg')} alt=""/>
<div className="carousel-caption">
<h3>We develop a passion for learning.</h3>
</div>
</div>
</div>
<a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
    </React.Fragment>)
}
export default Carousel;