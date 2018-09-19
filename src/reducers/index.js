import { combineReducers } from 'redux';

const galleryData = (state = {size:20, page:1, photos: [], total: 0 }, action) => {
  switch (action.type) {
    case 'RECEIVE_GALLERY':
      return action.response;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_GALLERY':
      return true;
    case 'RECEIVE_GALLERY':
      return false;
    default:
      return state;
  }
};


const galleryApp = combineReducers({ galleryData, isFetching });

export default galleryApp;
export const getIsFetchingGalleryData = state => state.isFetching;
export const getGallery = state => state.galleryData;
