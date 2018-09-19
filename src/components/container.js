import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './container.css';

class Container extends Component {
  render() {
    return (
      <div
        className={`container grid`}
        onClick={(e) => {
          this.props.onClick(e);
        }}
      >
        {this.props.list.map((element, i) => this.props.children({ element, i }))}
      </div>
    );
  }
}

Container.propTypes = {
  onClick: PropTypes.func,
  list: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default Container;
