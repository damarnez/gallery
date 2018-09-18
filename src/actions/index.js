import * as api from '../api';

const refreshGallery = () => ({
  type: 'REFRESH_Gallery'
});

export const requestGallery = (filter) => ({
    type: 'REQUEST_Gallery',
    filter
});

const receiveGallery = (filter, response) => ({
    type: 'RECEIVE_GALLERY',
    filter,
    response
});

export const fetchGalleryFromHost = filter => dispatch => {
    dispatch(requestGallery(filter));
    api.getGalleryFromHost(filter).then(response => dispatch(receiveGallery(filter, response)));
}