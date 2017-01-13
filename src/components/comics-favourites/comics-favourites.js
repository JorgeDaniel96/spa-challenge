const props = {
	addcomicFavouritesList: {type: Array, required: true},
	showModalImgZoom: {type: Boolean, required: true},
	characterImgSeledted: {type: Object, required: true}
}

const methods = {
	deleteComicFavourite(index) {
		this.addcomicFavouritesList.splice(index,1);
		localStorage.setItem('characterFavorites',JSON.stringify(this.addcomicFavouritesList));
	},

	showImgZoom(character) {
		this.characterImgSeledted = character.thumbnail;
		this.showModalImgZoom = true;
	}
}

export default {
	props,
	methods
}