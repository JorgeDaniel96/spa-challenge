const props = {
	sortListBy: {type: String, required: true}
}

const data = function(){
	return {
		option: ""
	}
}

const methods = {
	sortBy() {
		this.sortListBy = this.option;
	}
}

const watch = {
	option: function(newValue,oldValue) {
		if (newValue !== '') {
			this.sortBy();
		}
	}
}

export default {
	props,
	methods,
	data,
	watch
}