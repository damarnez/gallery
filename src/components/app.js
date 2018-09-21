import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getIsFetchingGalleryData, getGallery } from '../reducers';
import Header from './header';
import Loading from './loading';
import Container from './container';
import Card from './card';
import Hover from './hover';
import ImageLoading from './imageLoading';
import LightBox from './lightBox';
import Pagination from './pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightBox: {
        show: false,
        selected: {},
        position: 0,
      },
    };
    this.handleshowLightBox = this.handleshowLightBox.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.handleCloseLigthBox = this.handleCloseLigthBox.bind(this);
    this.handleSubPagination = this.handleSubPagination.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchGalleryFromHost, galleryData } = this.props;
    fetchGalleryFromHost({ page: galleryData.page, size: galleryData.size });
  }

  handleshowLightBox(event) {
    const { className, dataset } = event.target;
    let { position } = dataset;
    if (className === 'hover__hover') {
      position = event.target.childNodes[0].dataset.position; // eslint-disable-line
    }
    if (position > -1) this.setState({ lightBox: { show: true, selected: this.props.galleryData.photos[position], position: parseInt(position, 10) } });
  }

  handleCloseLigthBox(event) {
    event.preventDefault();
    this.setState({ lightBox: { show: false, position: 0, selected: {} } });
  }

  handleSubPagination(op) {
    return (event) => {
      event.preventDefault();
      const newPosition = this.state.lightBox.position + op;
      const newSelected = this.props.galleryData.photos[newPosition];
      if (newSelected) this.setState({ lightBox: { show: true, position: newPosition, selected: newSelected } });
    };
  }

  handlePagination(page) {
    if (!this.props.isFetching && this.props && this.props.fetchGalleryFromHost && this.props.galleryData && this.props.galleryData.page !== page) {
      this.props.fetchGalleryFromHost({ page, size: this.props.galleryData.size });
    }
  }

  render() {
    // Check if is done
    if (this.props.isFetching || !this.props.galleryData || !this.props.galleryData.total === 0) return (<Loading />);
    const ligthBoxObj = this.state.lightBox.show ? <LightBox onClose={this.handleCloseLigthBox} clickPrev={this.handleSubPagination(-1)} clickNext={this.handleSubPagination(1)} photo={this.state.lightBox.selected} /> : '';

    return (
      <React.Fragment>
        <Header />
        <Container list={this.props.galleryData.photos} onClick={ev => this.handleshowLightBox(ev)}>
          {({ element, i }) => (
            <Card key={i}>
              <Hover onHover={(
                <div data-position={i} className="hover__text">
                  {' '}
                  {element.data.owner}
                  {' '}
                </div>
)}
              >
                <ImageLoading position={i} shortImgUrl={element.urls.sImg} largeImgUrl={element.urls.lImg} />
              </Hover>
            </Card>
          )}
        </Container>
        <Pagination onChangePage={this.handlePagination} pageSize={this.props.galleryData.size} page={this.props.galleryData.page} totalItems={this.props.galleryData.total} />
        {ligthBoxObj}
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  galleryData: {
    page: 1,
    size: 0,
    total: 0,
    photos: [],
  },
};

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchGalleryFromHost: PropTypes.func.isRequired,
  galleryData: PropTypes.shape({
    page: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
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
