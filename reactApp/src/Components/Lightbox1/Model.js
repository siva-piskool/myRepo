import React, { Component } from "react";
import './Model.css';
class Model extends Component {
  constructor(props) {
    super(props);
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.state = {
      currentIndex: null,
      model: [
        require('../../images/gallery/pic_01.jpg'),
        require('../../images/gallery/pic_02.jpg'),
        require('../../images/gallery/pic_03.jpg'),
        require('../../images/gallery/pic_04.jpg'),
        require('../../images/gallery/pic_05.jpg'),
        require('../../images/gallery/pic_06.jpg'),
        require('../../images/gallery/pic_07.jpg'),
        require('../../images/gallery/pic_08.jpg')
      ],
      images: [
        {
          img: "01"
        },
        {
          img: "02"
        },
        {
          img: "03"
        },
        {
          img: "04"
        },
        {
          img: "05"
        },
        {
          img: "06"
        },
        {
          img: "07"
        },
        {
          img: "08"
        }
      ],
      captions: ["Cap1", "Cap2", "Cap3", "Cap4","Cap5", "Cap6", "Cap7", "Cap8"]
    };
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  onClickForward() {
    if (this.state.currentIndex + 1 === this.state.model.length) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }
  onClickBack() {
    if (this.state.currentIndex - 1 === -1) {
      this.setState({
        currentIndex: this.state.model.length - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }
  render() {
    const images = this.state.images.map((data, index) => {
      return (
        <div className="col-md-3 image-border py-2" onClick={(e) => this.openModal(e, index)}>
          <img
            src={require(`../../images/gallery/pic_${data.img}.jpg`)}
            className="img-fluid"
            data-toggle="modal"
            data-target="#myModal"
          />
        </div>
      );
    });
    return (  
      <div className="container">
        <div className="row">{images}</div>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  {this.state.captions[this.state.currentIndex]}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={this.state.model[this.state.currentIndex]}
                  alt=""
                  className="img-fluid"
                />
                
              </div>
            <div className="modal-footer d-flex">
                <button onClick={this.onClickBack}>Prev</button>
                <button onClick={this.onClickForward}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Model;
