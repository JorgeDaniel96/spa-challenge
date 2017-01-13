import marvelServices from '../../services/marvel.js';
const props = {
  characterInfo: {type: Object, required: true},
  showModalCharacterComics:{  type: Boolean, required: true},
  showModalViewMore: {type: Boolean, required: true},
  showModalImgZoom: {type: Boolean, required: true},
  comicSelected: {type: Object, required: true},
  comicsCharacterSelectedOfCard: {type: Array, required: true},
  characterImgSeledted: {type: Object, required: true}
}

const data = function(){
	return {
		noDescriptionMsg: 'No description available.',
		comics: []
	}
}

const methods = {

	getComics(idCharacter) {
		marvelServices.getPrincipalComics(idCharacter,(data) => {
			this.comics = data;
		})
	},

	showComicsModal(comic) {
		this.comicSelected = comic;
		this.showModalCharacterComics = true;
	},

	characterSelected(idCharacter) {
		marvelServices.getComicsForViewMore(idCharacter,(data) => {
			this.comicsCharacterSelectedOfCard = data;
			this.showModalViewMore = true;
		})
	},

	showImgZoom(character) {
		this.characterImgSeledted = character.thumbnail;
		this.showModalImgZoom = true;
	}

}

const watch = {
	idCharacter: function(newValue,oldValue) {
		if (newValue !== null) {
			this.getComics()
		}
	}
}

export default {
	data,
	props,
	methods,
	watch
}