import '../css/app.scss';
import Background from './background';
import Greeting from './greeting';
import Quote from './quote';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Background(); // Si on passe des paramètres ici, ils seront récupérés dans les parenthèses de la méthode constructeur
      new Greeting();
      new Quote();
    }
}

new App();
