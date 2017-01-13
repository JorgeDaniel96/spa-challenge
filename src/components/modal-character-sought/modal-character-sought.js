import marvelServices from '../../services/marvel.js';

const props = {
  	showModal: {type: Boolean, required: true},
 	idCharacterSought: {type: Number, required:true},
	showModalImgZoom: {type: Boolean, required: true},
	characterImgSeledted: {type: Object, required: true}
}

const data = function() {
	return {
		comicsInfo: [],
		noAvailableMsg: 'No available.',
		noComicsMsg: 'No comics available.'
	}
}

const methods = {
	hideModal() {
		this.showModal = false;
	},

	getCharacterComicsInfo() {
		marvelServices.getComicById(this.idCharacterSought,(data) => { //callback es una funcion //
			this.comicsInfo = data;
		})
	},

	showImgZoom(comic) {
		this.characterImgSeledted = comic.thumbnail;
		this.showModalImgZoom = true;
	}
}

const watch = {
	idCharacterSought: function(newValue,oldValue) {
		if (newValue !== null) {
			this.getCharacterComicsInfo()
		}
	}
}

export default {
	props,
	methods,
	watch,
	data
}