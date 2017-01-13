const props = {
  totalPages: {type: Number, required: true},
  paginationCallback: {type: Function, required: true}
}

const data = function() {
	return {
		currentPage: 1
	}
}

const methods = {
	getCharactersList(page) {
		this.paginationCallback(page);
		this.currentPage = page;
	},

	nextPage() {
		if (this.currentPage <= this.totalPages) {
			let next = this.currentPage + 1;
			this.paginationCallback(next);
			this.currentPage = next;
		}
	},

	backPage() {
		if (this.currentPage > 1) {
			let back = this.currentPage - 1;
			this.paginationCallback(back);
			this.currentPage = back;
		} 
	}
}

const computed = {
	pages(){
		let aux = [];
		for(let i = 1; i <= this.totalPages; i++){
			aux.push(i)
		}
		return aux
	}
}

export default {
	data,
	props,
	methods,
	computed
}