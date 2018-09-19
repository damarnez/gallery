import * as api from '../api';

export const requestGallery = response => ({
  type: 'REQUEST_GALLERY',
  response,
});

const receiveGallery = response => ({
  type: 'RECEIVE_GALLERY',
  response,
});

export const fetchGalleryFromHost = filter => (dispatch) => {
  dispatch(requestGallery({
    page: filter.page, size: filter.size, photos: [], total: 0,
  }));
  api.getGalleryFromHost(filter).then(response => dispatch(receiveGallery(response)));
};
