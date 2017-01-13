const props = {
	characterImgSeledted: {type: Object, required: true},
  	showModalImgZoom: {type: Boolean, required: true}
}

const methods = {
	hideModal() {
		this.showModalImgZoom = false;
	}	
}

export default {
	props,
	methods
}