import React from 'react';
import PropTypes from 'prop-types';
import ImageLoading from './imageLoading';
import './ligthbox.css';

const LigthBox = ({photo}) => (
  <div className="ligthbox-content">
    <div className="ligthbox-title">{photo.data.title}</div>
    <div className="ligthbox-image"><ImageLoading  shortImgUrl={photo.urls.sImg} largeImgUrl={photo.urls.lImg} /></div>
    <div className="ligthbox-footer">{photo.data.owner}
  </div>
);
export default LigthBox;
