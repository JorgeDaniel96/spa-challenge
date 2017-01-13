const props = {
	comicSelected: {type: Object, required: true},
  	showModalCharacterComics:{type: Boolean, required: true},
	addcomicFavouritesList: {type: Array, required: true},
	showModalImgZoom: {type: Boolean, required: true},
	characterImgSeledted: {type: Object, required: true}
}

const data = function() {
	return {
		comicsInfo: [],
		noDescriptionAvailableMsg: 'No description available.',
		noTitleAvailableMsg: 'No title available.',
		noComicsMsg: 'No comics available.'
	}
}

const methods = {
	hideModal() {
		this.showModalCharacterComics = false;
	},

	addToFavourites(comic) {
		let aux = false;
		for (let i = 0; i < this.addcomicFavouritesList.length; i++) {
			if (this.addcomicFavouritesList[i].id === comic.id ) {
				aux = true;
				break;
			}
		}
		if (!aux) {
			this.addcomicFavouritesList.push(comic);
			localStorage.setItem('characterFavorites',JSON.stringify(this.addcomicFavouritesList));
		}
	},

	showImgZoom(character) {
		this.characterImgSeledted = character.thumbnail;
		this.showModalImgZoom = true;
	}
}

const watch = {
	idCharacterComicSelected: function(newValue,oldValue) {
		if (newValue !== null) {
			this.getCharacterComicList()
		}
	},

	nameComicSelected: function(newValue,oldValue) {
		if (newValue !== '') {
			this.getCharacterComicList()
		}
	},

	comicsInfo: function(newValue,oldValue) {
		if (newValue !== []) {
			this.showComicSelected()
		}
	}
}

export default {
	props,
	methods,
	watch,
	data
}