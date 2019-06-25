import './ReactLightBox.css';
import React from 'react';

class ReactLightBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: null,
            imgUrls: [
                require('../../images/gallery/pic_01.jpg'),
                require('../../images/gallery/pic_02.jpg'),
                require('../../images/gallery/pic_03.jpg'),
                require('../../images/gallery/pic_04.jpg'),
                require('../../images/gallery/pic_05.jpg'),
                require('../../images/gallery/pic_06.jpg'),
                require('../../images/gallery/pic_07.jpg'),
                require('../../images/gallery/pic_08.jpg'),
                require('../../images/gallery/pic_09.jpg'),
                require('../../images/gallery/pic_10.jpg')
            ],
            altTxt: [
                'Feature Stars of Pride International School.',
                'Pride of our succeeded students.',
                'Creativity of students who make our brand stylish.',
                'Play @ Pride International School.',
                'Study that involve reactions of passion.',
                'Traditional art of “Tholu Bommalata” craft made by our students.',
                'Achievers @ Pride International School.',
                'Achievers @ Pride International School.',
                'Wood Craft @ Pride International School.',
                'Electronics @ Pride International School.'
            ]
        };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
    }
    openModal(e, index) {
        this.setState({ currentIndex: index });
    }
    closeModal(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }
    findPrev(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    findNext(e) {
        if (e != undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.imgUrls.map((src, index) => {
                            return(
                                <div className='col-lg-3 col-md-6 col-sm-12' onClick={(e) => this.openModal(e, index)}>
                                     <img src={src} key={src} className='img-fluid cursor' alt={src} />
                                </div>
                            )
                        })
                    }
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < this.state.imgUrls.length}
                    src={this.state.imgUrls[this.state.currentIndex]}
                    alt={this.state.altTxt[this.state.currentIndex]}
                />
            </div>
        )
    }
}

class GalleryModal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render() {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src, alt } = this.props;
        if (!src) {
            console.log('whut')
            return null;
        }
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}></div>
                <div isOpen={!!src} className="modal">
                    <div className='modal-body'>
                        <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src} />
                        <p className='gallery-footer'>{alt}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactLightBox;