import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './container.css';

class Container extends Component {
	render(){
		return (<div className={"container " + (this.props.showList ? 'grid' : '')}>
					{this.props.list.map((element,i) => {
						return this.props.children({element, i});
					})}
				</div>);
	}
}

Container.propTypes = {
	list: PropTypes.array.isRequired,
	children: PropTypes.func.isRequired
};

export default Container;