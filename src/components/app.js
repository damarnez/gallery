import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getIsFetchingGalleryData, getGallery } from '../reducers';
import Header from './header';
import Container from './container';
import ImageLoading from './imageLoading';
import Pagination from './pagination';

class App extends Component {
  componentDidMount() {
    this.fetchData();
    this.handleShowLigthBox = this.handleShowLigthBox.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  fetchData() {
    const { fetchGalleryFromHost, galleryData } = this.props;
    fetchGalleryFromHost({ page: galleryData.page, size: galleryData.size });
  }

  handleShowLigthBox(event) {
	  console.log(event.target);
  }

  handlePagination(page) {
    if(!this.props.isFetching  && this.props && this.props.fetchGalleryFromHost && this.props.galleryData && this.props.galleryData.page !== page){
  	  this.props.fetchGalleryFromHost({ page, size: this.props.galleryData.size });
	  }
  }

  render() {
    // Check if is done
    if (this.props.isFetching || !this.props.galleryData || !this.props.galleryData.total === 0) return (<div> Loading ... </div>);
    return (
      <React.Fragment>
        <Header />
        <Container list={this.props.galleryData.photos} onClick={(ev) => this.handleShowLigthBox(ev)}>
          {({ element, i }) => {
				      return (<ImageLoading key={i} position={i} shortImgUrl={element.urls.sImg} largeImgUrl={element.urls.lImg} />);
          }}
        </Container>
        <Pagination onChangePage={this.handlePagination.bind(this)} pageSize={this.props.galleryData.size} page={this.props.galleryData.page} totalItems={this.props.galleryData.total} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  galleryData: PropTypes.shape({
    total: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = state => ({
  isFetching: getIsFetchingGalleryData(state),
  galleryData: getGallery(state),
});

App = connect(
  mapStateToProps,
  actions,
)(App);

export default App;
