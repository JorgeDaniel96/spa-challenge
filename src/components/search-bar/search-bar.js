import marvelServices from '../../services/marvel.js';

const props = {
	showModal:{type: Boolean, required: true},
	idCharacterSought: {type: Number , required: true},
	name: {type: String},
	auxReturnMainPage: {type: Boolean, required: true}
}

const data = function(){
	return {
		nameToSearch: '',
		searchResults: [],
		nameEnter: {}
	}
}
 
const methods = {
	getCharacterByName() {
		marvelServices.getCharacterByName(this.nameToSearch,(data) => {
			this.searchResults = data;
		})
	},

	getIdCharacterSought(index) {
		if (this.searchResults[index].comics.available > 0) {
			this.idCharacterSought = this.searchResults[index].id,
			this.showModal = true;
		} else {
		}
	},

	showCharacterSought() {
		this.name = this.nameEnter;
		this.nameToSearch = '';
		this.searchResults = [];
	},

	returnMainPage() {
		this.auxReturnMainPage = true;
	}


}

const watch = {
	nameToSearch: function(newValue,oldValue) {
		if (newValue !== '' && newValue.length >= 3) {
			this.getCharacterByName(); 
			this.nameEnter = newValue;
		} else {
			this.searchResults = [];
		}
	}
}

export default {
	data,
	methods,
	props,
	watch
}