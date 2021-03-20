import '../css/app.scss';
import $ from 'jquery';
import Character from './character';
import Search from './search';
import Quotation from './quotation';

class App {
    constructor () {
        this.initApp();
    }

    GetApiCharacter() {
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

    GetApiQuotation() {
      const api = {
        endpoint: 'https://www.breakingbadapi.com/api/quote/random'
      };
      $.ajaxSetup({cache: false}); // Sinon il affiche la même citation pour économiser le cache
      $.getJSON(api.endpoint)
        .then( (response) => { // Il le lit à la suite de la ligne au-dessus mais on fait un retour à la ligne pour la lisibilité
          new Quotation(response);
        })
        .catch( (error) => {
          console.log('Error quote', error);
        })
    }

    Transition() {
      var first_link_home = document.getElementById("perso");
      var second_link_home = document.getElementById("cit");
      var first_link_quotation = document.getElementById("quotation__home");
      var second_link_quotation = document.getElementById("quotation__new");
      var first_section = document.getElementById("homestyle");
      var second_section = document.getElementById("charstyle");
      var third_section = document.getElementById("quotestyle");
      var back_home = document.getElementById("logo");
      var back_home2 = document.getElementById("logo2");
      back_home.addEventListener('click', () => {
        first_section.style.setProperty('display', 'block');
        second_section.style.setProperty('display', 'none');
        third_section.style.setProperty('display', 'none');
      });
      back_home2.addEventListener('click', () => {
        first_section.style.setProperty('display', 'block');
        second_section.style.setProperty('display', 'none');
        third_section.style.setProperty('display', 'none');
      });
      first_link_home.addEventListener('click', () => {
        first_section.style.setProperty('display', 'none');
        second_section.style.setProperty('display', 'block');
        third_section.style.setProperty('display', 'none');
      });
      second_link_home.addEventListener('click', () => {
        first_section.style.setProperty('display', 'none');
        second_section.style.setProperty('display', 'none');
        third_section.style.setProperty('display', 'block');
      });
      first_link_quotation.addEventListener('click', () => {
        first_section.style.setProperty('display', 'block');
        second_section.style.setProperty('display', 'none');
        third_section.style.setProperty('display', 'none');
      });
      second_link_quotation.addEventListener('click', () => {
        this.GetApiQuotation();
      });
    }

    initApp () {
      // Start application
      this.GetApiCharacter();
      this.GetApiQuotation();
      this.Transition(); // Si on passe des paramètres ici, ils seront récupérés dans les parenthèses de la méthode constructeur
    }
}

new App();
