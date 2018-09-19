import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({  children }) => (
  <div className="card">
   {children}
  </div>
);
export default Card;
