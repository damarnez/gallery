import React, {Component} from "react";
import * as actions from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsFetchingGalleryData, getGallery } from '../reducers';
import Header from './header';
import Container from './container';
import ImageLoading from './imageLoading';
class App extends Component {
	
	componentDidMount() {
		this.fetchData();
		this.handleShowLigthBox = this.handleShowLigthBox.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
	}
	fetchData() {
		const { filter = {size:20, page:1}, fetchGalleryFromHost } = this.props;
		fetchGalleryFromHost(filter);
	}
	handleShowLigthBox(event){
		 console.log(event.target);
	}
	handlePagination(page) {
		alert(`Version : ${page}`);
	}
	render(){
		if(this.props.isFetching || !this.props.galleryData ) return (<div> Loading ... </div>);
		console.log(this.props.galleryData);
		return (<React.Fragment>
			<Header/>
			<Container list={this.props.galleryData.photos} onClick={this.handleShowLigthBox}>
				{({ element, i}) => {
					console.log(' ELEMENT : ',element)
					//if(element && element.urls)
					return (<ImageLoading key={i} shortImgUrl={element.urls.sImg} largeImgUrl={element.urls.lImg} />);
					//return (<div>NO PHOTO </div>)
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