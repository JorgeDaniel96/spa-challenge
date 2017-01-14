import request from 'superagent';

const END_POINT = 'https://gateway.marvel.com',
	  API_KEY = '0358e9b95b3441b86e45b415b92a4b11';
				//48e38402bceb65cff5c1c98a1a9953c9
		
export default {
	getCharacterList(orderBy, callback, pageNumber,name) { // principal
		let limit = 10,
			offset = (pageNumber - 1) * limit,
			url = `${END_POINT}/v1/public/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}&apikey=${API_KEY}`;
		request.get(url)
		.then((response) => {
			callback(response.body.data.results, response.body.data.total / limit);
		}).catch((error) => {
			console.log("Error getting your data")
		})
	},
	
	getCharacterByName(name, callback) { // results searchBar
		let limit = 3,
			url = `${END_POINT}/v1/public/characters?nameStartsWith=${name}&limit=${limit}&apikey=${API_KEY}`;
		request.get(url)
		.then((response) => {
			callback(response.body.data.results)
		}).catch((error) => {
			console.log("Error getting your data")
		})
	},

	getPrincipalCharacterByName(name, callback) { // principal characters by search
		let limit = 10,
			url = `${END_POINT}/v1/public/characters?nameStartsWith=${name}&limit=${limit}&apikey=${API_KEY}`;
			//http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=iron&orderBy=modified&limit=10&offset=10&apikey=0358e9b95b3441b86e45b415b92a4b11
		request.get(url)
		.then((response) => {
			callback(response.body.data.results)
		}).catch((error) => {
			console.log("Error getting your data")
		})
	},

	getComicById(id, callback) { // modal search bar
		let limit = 10,
			url = `${END_POINT}/v1/public/characters/${id}/comics?limit=${limit}&apikey=${API_KEY}`;
		request.get(url)
		.then((response) => {
			callback(response.body.data.results)
		}).catch((error) => {
			console.log("Error getting your data")
		})
	},

	getComicsForViewMore(id, callback) { // modal search bar
		let limit = 20,
			url = `${END_POINT}/v1/public/characters/${id}/comics?limit=${limit}&apikey=${API_KEY}`;
		request.get(url)
		.then((response) => {
			callback(response.body.data.results)
		}).catch((error) => {
			console.log("Error getting your data")
		})
	},

	getPrincipalComics(id, callback) { // principal comics 
		let limit = 4,
			url = `${END_POINT}/v1/public/characters/${id}/comics?limit=${limit}&apikey=${API_KEY}`;
		request.get(url)
		.then((response) => {
			callback(response.body.data.results)
		}).catch((error) => {
			console.log("Error getting your data")
		})
	},
}

