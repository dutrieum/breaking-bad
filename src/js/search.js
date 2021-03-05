import $ from 'jquery';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Search {

  constructor(response) {
    this.response = response;
    this.initEls();
    this.initEvents();
  }

  initEls() {
    this.$els = {
      character: $('.js-character'),
      search: $('.js-searchbar')
    }
  }

  initEvents() {
    this.$els.search.on("input",() => {
      console.log(this.$els.search.val());
    })
    this.saveCharacter();
  }

  saveCharacter() {
    var tab = this.response;
    console.log(tab);
    this.compareCharacter(tab);
  }

  filterArray(arr, requete) {
    return arr.filter(function (el) {
      return el.name.toLowerCase().startsWith(requete.toLowerCase());
    })
  }

  compareCharacter(tab) {
    var input_field = document.getElementById("searchbar").value;
    if (input_field) {
      var tab_filtered = tab;
      var filter = this.filterArray(tab_filtered, input_field);
      console.log(filter);
      console.log("test");
    }
  }

  autoComplete() {

  }

}
