import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imageLoading.css';

class ImageLoading extends Component {
  constructor(props) {
    super(props);
    this.largeImage = null;
  }
  loadImage(){
    const loaderImg = new Image();

    loaderImg.src = this.props.largeImgUrl;

    loaderImg.onload = () => {
      if(this.largeImage){
        this.largeImage.setAttribute(
          'style',
          `background-image: url('${this.props.largeImgUrl}')`,
        );
        this.largeImage.classList.add('iron-image-fade-in');
      }
    };
  }
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(prevProps, prevState){
    console.log(' UPDATE ??');
    if(prevProps.shortImgUrl !== this.props.shortImgUrl || prevProps.largeImgUrl !== this.props.largeImgUrl) {
        this.loadImage();
    }
       
  }

  render() {
    return (
      <div className="iron-image-container">

        <div
          data-position={this.props.position}
          className="iron-image-loaded"
          ref={imageLoadedElem => this.largeImage = imageLoadedElem}
        />
        <div
          data-position={this.props.position}
          className="iron-image-preload"
          style={{ backgroundImage: `url('${this.props.shortImgUrl}')` }}
        />

      </div>
    );
  }
}


ImageLoading.propTypes = {
    shortImgUrl: PropTypes.string.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
    position : PropTypes.number
};

export default ImageLoading;
