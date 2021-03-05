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
        })
        .catch( (error) => {
          console.log('Error quote', error);
        })
    }

    initApp () {
      // Start application
      this.GetApi();
      new Background(); // Si on passe des paramètres ici, ils seront récupérés dans les parenthèses de la méthode constructeur
      new Greeting();
      new Quote();
      new Character();
    }
}

new App();
