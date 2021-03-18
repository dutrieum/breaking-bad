import $ from 'jquery';
import Character from './character';

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
      search: $('.js-searchbar'),
      characterlist: $('.js-list')
    }
  }

  initEvents() {
    this.$els.search.on("input",() => {
      if(this.$els.search.val().length >= 2) {
        this.saveCharacter();
      }
    })
  }

  saveCharacter() {
    var tab = this.response;
    //console.log(tab);
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
      this.$els.characterlist.html("");
      for(let i = 0; i < filter.length; i++) {
        const result = '<option value="'+filter[i].name+'">';
        this.$els.characterlist.append(result);
      }
      this.changeCharacter(tab);
    }
  }

  changeCharacter(tab) {
    var choice = document.getElementById("validate");
    choice.addEventListener('click', (e) => {
        e.preventDefault();
        var input_complete = document.getElementById("searchbar").value;
        if (input_complete) {
          var tab_filter = tab;
          var name_filter = this.filterArray(tab_filter, input_complete);
          new Character(name_filter[0]);
          this.$els.characterlist.html("");
        }
     });
  }
}
