import queryString from 'query-string';
  
export const getGalleryFromHost = (params) => {
	const query = queryString.stringify(params)
	return fetch(`/api/images?${query}`).then(resp => resp.json()).then(results => {
		return { 
			total: parseInt(results.photos.total), 
			photos:results.photos.photo };
	}).catch(err => {
		throw err;
	})
}