import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app';
const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={App}/>
			</div>
		</BrowserRouter>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;
