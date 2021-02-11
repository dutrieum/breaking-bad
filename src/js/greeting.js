import $ from 'jquery'; // Étape 1
import {getGreetingByTime} from './helper/greetingHelper'; // Étape 2

/*
* Objectif : déterminer un "salut" en fonction de l'heure et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une salutation en fonction de l'heure
* 3- Récupérer une valeur aléatoire à partir d'un tableau
* 4- Afficher le résultat
* */

export default class Greeting {

  constructor() {
    this.initEls();
    this.initEvents();
  }

  initEls() {
    this.$els = {
      greeting: $('.js-greeting'), // Étape 1
    };
    this.names = ['S4','you','my friend','dev']; // Étape 2
  }

  initEvents() {
    this.displayMessage(); // Étape 1
  }

  selectName() { // Étape 2
    const i = Math.floor(Math.random() * this.names.length);
    return this.names[i];
  }

  makeMessage() { // Étape 2
    return `Good ${getGreetingByTime()}, ${this.selectName()}`;
  }

  displayMessage() { // Étape 1
    this.$els.greeting.text(this.makeMessage());
  }

}
