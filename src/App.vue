<template>
	<div id="app">
		<search-bar :id-character-sought.sync = "idCharacterSought"
					:name.sync = "searchName"
					:aux-return-main-page.sync = "returnMainPage"
					:show-modal.sync = "showModal"> 
		</search-bar>

		<modal-character-sought :id-character-sought = "idCharacterSought"
								:show-modal.sync = "showModal"
								:character-img-seledted.sync = "characterImgSeledted"
		  				 		:show-modal-img-zoom.sync = "showModalImgZoom"> 
		</modal-character-sought>

		<sort-character-list-by :sort-list-by.sync = "sortListBy"> </sort-character-list-by>

		<section class = "row center-xs characterSection">
			<character v-for = "character in characterList" 
			           :character-info = "character"  
			           :comic-selected.sync = "comicSelected"
			           :comics-character-selected-of-card.sync = "comicsCharacterSelectedOfCard"
					   :show-modal-character-comics.sync = "showModalCharacterComics"
					   :show-modal-view-more.sync = "showModalViewMore"
					   :character-img-seledted.sync = "characterImgSeledted"
					   :show-modal-img-zoom.sync = "showModalImgZoom">
			</character>
   		</section>

   		<modal-view-more :comics-character-selected-of-card.sync = "comicsCharacterSelectedOfCard"
   						 :show-modal-view-more.sync = "showModalViewMore"
   						 :addcomic-favourites-list.sync = "addcomicFavouritesList"
   						 :character-img-seledted.sync = "characterImgSeledted"
		  				 :show-modal-img-zoom.sync = "showModalImgZoom"> 
		</modal-view-more>

   		<modal-character-comics-selected
   				:comic-selected.sync = "comicSelected"
		    	:show-modal-character-comics.sync = "showModalCharacterComics"
		    	:addcomic-favourites-list.sync = "addcomicFavouritesList"
		    	:character-img-seledted.sync = "characterImgSeledted"
		  		:show-modal-img-zoom.sync = "showModalImgZoom"> 
	    </modal-character-comics-selected>

	    <modal-img-zoom :character-img-seledted.sync = "characterImgSeledted"
	    				:show-modal-img-zoom.sync = "showModalImgZoom">>
		</modal-img-zoom>

		<comics-favourites  :addcomic-favourites-list.sync = "addcomicFavouritesList"
							:character-img-seledted.sync = "characterImgSeledted"
					  		:show-modal-img-zoom.sync = "showModalImgZoom"> 
  		</comics-favourites>

		<paginator :total-pages = "totalPages"
				   :pagination-callback = "getCharacters"> 
		</paginator>

   		<footer>
   			<p id="rightsGrability"> Grability 2017 - Todos los derechos reservados </p>
   			<a id="containerGrabilityLogo" href="http://www.grability.com/" target="_blank"> 
   				<img id="grabilityLogo" src="general_assets/grability-logo.png">
			</a>
   		</footer>
	</div>
</template>

<script>

	import marvelServices from './services/marvel.js';
	import searchBar from './components/search-bar/search-bar.vue';
	import character from './components/character/character.vue';
	import modalCharacterSought from './components/modal-character-sought/modal-character-sought.vue';
	import modalCharacterComicsSelected from  './components/modal-character-comics-selected/modal-character-comics-selected.vue';
	import comicsFavourites from './components/comics-favourites/comics-favourites.vue';
	import sortCharacterListBy from './components/sort-character-list-by/sort-character-list-by.vue';
	import modalViewMore from './components/modal-view-more/modal-view-more.vue';
	import modalImgZoom from './components/modal-img-zoom/modal-img-zoom.vue';
	import paginator from './components/paginator/paginator.vue';

	const data = function() {
		return {
			characterList: [],
			showModal: false,
			showModalViewMore: false,
			showModalCharacterComics: false,
			showModalImgZoom: false,
			idCharacterSought: 0,
			comicSelected: {},
			addcomicFavouritesList: [],
			sortListBy: '',
			totalPages: 0,
			searchName: '',
			returnMainPage: false,
			comicsCharacterSelectedOfCard: [],
			characterImgSeledted: {}
		}
	}

	const methods = { 
      	getCharacters(pageNumber) {

      		if (this.searchName === '' || this.searchName === undefined || this.returnMainPage === true) {
		      	marvelServices.getCharacterList(this.sortListBy || '-modified',(data,total) => {  
		    	this.characterList = data;
		    	this.totalPages = total;
		      	},pageNumber) 
	      	} else {
	      		marvelServices.getPrincipalCharacterByName(this.searchName,(data) => {
				this.characterList = data;
				})
	      	}
	      	if (localStorage.characterFavorites) {
	      		this.addcomicFavouritesList = JSON.parse(localStorage.characterFavorites);
	      	}
	    }
    }

   	const created = function () {
  		this.getCharacters(1);
  	}

    const watch = {
		sortListBy: function(newValue,oldValue) {
			if (newValue !== '') {
				this.getCharacters();
			}
		},

		searchName: function(newValue,oldValue) {
			if (newValue !== '') {
				this.getCharacters();
				this.searchName = '';
			}
		},

		returnMainPage: function(newValue,oldValue) {
			if (newValue === true) {
				this.getCharacters();
				this.returnMainPage = false;
			}
		}

	}

	const components = {
		searchBar,
		modalCharacterSought,
		character,
		modalCharacterComicsSelected,
		comicsFavourites,
		sortCharacterListBy,
		paginator,
		modalViewMore,
		modalImgZoom
	}

	export default {
		created,
		components,
		data,
		methods,
		watch
	}

</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}

	footer {
		background: #2d2727;
	    color: rgb(179, 177, 178);
	    height: 90px;
	    display: flex;
	    align-items: center;
        justify-content: space-between;
	}

	#rightsGrability {
	    margin-left: 10%;
	}

	#containerGrabilityLogo {
		cursor: pointer;
		margin-right: 10%;
	}

	#grabilityLogo:hover {
	    height: 60px;
	    border-radius: 40px;
		border: 2px solid black;
	}

</style>


