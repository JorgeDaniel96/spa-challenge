const props = {
  	showModalViewMore: {type: Boolean, required: true},
  	comicsCharacterSelectedOfCard: {type: Array, required:true},
 	addcomicFavouritesList: {type: Array, required: true},
	showModalImgZoom: {type: Boolean, required: true},
	characterImgSeledted: {type: Object, required: true}
}

const data = function() {
	return {
		noAvailableMsg: 'No available.',
		noComicsMsg: 'No comics available.'
	}
}

const methods = {
	hideModal() {
		this.showModalViewMore = false;
	},

	addComicsRandom() {
		let aux = false;
		let j = 1;

		while(j < 4) {
			let index = Math.floor(Math.random()*(this.comicsCharacterSelectedOfCard.length));
			let comic = this.comicsCharacterSelectedOfCard[index];
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
			j++;
		} 
	},

	showImgZoom(comic) {
		this.characterImgSeledted = comic.thumbnail;
		this.showModalImgZoom = true;
	}
}



export default {
	props,
	methods,
	data
}