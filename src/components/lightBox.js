import React from 'react';
import PropTypes from 'prop-types';
import ImageLoading from './imageLoading';
import './lightbox.css';

const LigthBox = ({
  photo, onClose, clickPrev, clickNext,
}) => (
  <div>
    <div className="lb-overlay-back" />
    <div className="lb-overlay">

      <ImageLoading shortImgUrl={photo.urls.sImg} largeImgUrl={photo.urls.lImg} />
      <div>
        <h3>{photo.data.title}</h3>
        <p>
          {photo.data.owner}
          <br />
          <a href="#" onClick={clickPrev} className="lb-prev">{'<<'}</a>
          <a href="#" onClick={clickNext} className="lb-next">{'>>'}</a>
        </p>

      </div>
      <a href="#" className="lb-close" onClick={onClose}>x Close</a>
    </div>
  </div>
);

LigthBox.propTypes = {
  photo: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
  clickPrev: PropTypes.func.isRequired,
};

export default LigthBox;
