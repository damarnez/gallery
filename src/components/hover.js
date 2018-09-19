import React from 'react';
import PropTypes from 'prop-types';
import './hover.css';

const Hover = ({ onHover, children }) => (
  <div className="hover">
    <div className="hover__no-hover">{children}</div>
    <div className="hover__hover">{onHover}</div>
  </div>
);

Hover.propTypes = {
  onHover: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default Hover;
