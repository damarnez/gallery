import React, {Component} from "react";
import * as actions from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsFetchingGalleryData, getGallery } from '../reducers';
import Header from './header';
import Container from './container';
class App extends Component {
	
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		const { filter = {size:20, page:1}, fetchGalleryFromHost } = this.props;
		fetchGalleryFromHost(filter);
	}
	handleShowLigthBox(){
		 
	}
	handlePagination(page) {
		alert(`Version : ${page}`);
	}
	render(){
		if(this.props.isFetching || !this.props.galleryData ) return (<div> Loading ... </div>);
		console.log(this.props.galleryData);
		return (<React.Fragment>
			<Header/>
			<Container list={this.props.galleryData.photos}>
				{({photo,i}) => {
					return (<div key={i} > IMAGE </div>);
				}}
			</Container>
		</React.Fragment>);
	}
}

App.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	galleryData: PropTypes.shape({
      total: PropTypes.number.isRequired,
      photos: PropTypes.array.isRequired,
    })
};

const mapStateToProps = (state) => {
	return {
		isFetching: getIsFetchingGalleryData(state),
		galleryData: getGallery(state)
	}
};

App = connect(
  mapStateToProps,
  actions
)(App);

export default App;