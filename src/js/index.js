import '../css/app.scss';
import $ from 'jquery';
import Background from './background';
import Greeting from './greeting';
import Quote from './quote';
import Character from './character';
import Search from './search';

class App {
    constructor () {
        this.initApp();
    }

    GetApi() {
      const api = {
        endpoint: 'https://www.breakingbadapi.com/api/characters'
      };
      $.ajaxSetup({cache: false}); // Sinon il affiche la même citation pour économiser le cache
      $.getJSON(api.endpoint)
        .then( (response) => { // Il le lit à la suite de la ligne au-dessus mais on fait un retour à la ligne pour la lisibilité
          new Search(response);
          new Character(response[0]);
        })
        .catch( (error) => {
          console.log('Error quote', error);
        })
    }

    Transition() {
      var first_link = document.getElementById("perso");
      var second_link = document.getElementById("cit");
      var first_section = document.getElementById("homestyle");
      var second_section = document.getElementById("charstyle");
      var back_home = document.getElementById("logo");
      back_home.addEventListener('click', () => {
        first_section.style.setProperty('display', 'block');
        second_section.style.setProperty('display', 'none');
      });
      first_link.addEventListener('click', () => {
        first_section.style.setProperty('display', 'none');
        second_section.style.setProperty('display', 'block');
      });
      second_link.addEventListener('click', () => {
        second_section.style.setProperty('display', 'none');
        first_section.style.setProperty('display', 'block');
      });
    }

    initApp () {
      // Start application
      this.GetApi();
      this.Transition();
      new Background(); // Si on passe des paramètres ici, ils seront récupérés dans les parenthèses de la méthode constructeur
      new Greeting();
      new Quote();
    }
}

new App();
