import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './imageLoading.css';

class imageLoading extends Component {

  constructor(props) {
    super(props);
    this.largeImage = null;
  }

  componentDidMount() {
        
    const loaderImg = new Image();

    loaderImg.src = this.props.largeImgUrl;

    loaderImg.onload = () => {
      this.largeImage.setAttribute(
        'style',
        `background-image: url('${this.props.largeImgUrl}')`
      );
      this.largeImage.classList.add('iron-image-fade-in');
    }

  };

  render() {
    return (
      <div className="iron-image-container">
      
        <div 
          className="iron-image-loaded" 
          ref={imageLoadedElem => this.largeImage = imageLoadedElem}>
        </div>
        <div 
          className="iron-image-preload" 
          style={{ backgroundImage: `url('${this.props.shortImgUrl}')` }}>
        </div>
      
      </div>
    )
  }

}

export default imageLoading;