import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

const Container = ({ onClick, list, children }) => (
  <div
    className="container grid"
    onClick={onClick}
  >
    {list.map((element, i) => children({ element, i }))}
  </div>
);

Container.defaultProps = {
  onClick: () => {},
};

Container.propTypes = {
  onClick: PropTypes.func,
  list: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default Container;
