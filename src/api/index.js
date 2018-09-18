import queryString from 'query-string';

/**
 * Create url photos from documentation from flickr
 * https://www.flickr.com/services/api/misc.urls.html
 * 		
 * @param  {array} photos [list of id and values]
 * @return {array}        [return the same data plus mounted urls]
 *
 * Example 
 *
 *	https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg
 * farm-id: 1
 * server-id: 2
 * photo-id: 1418878
 * secret: 1e92283336
 * size: m
 * 
 */
const createUrlImages = (photos) => {
	return photos.map(data => {
		const urls = {
			sImg:`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_t.jpg`,
			mImg:`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`,
			lImg:`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_c.jpg`
		};
		
		return { urls, data };
	})
}

  
export const getGalleryFromHost = (params) => {
	const query = queryString.stringify(params)
	return fetch(`/api/images?${query}`).then(resp => resp.json()).then(results => {
		return { 
			total: parseInt(results.photos.total), 
			photos:createUrlImages(results.photos.photo) };
	}).catch(err => {
		throw err;
	})
}