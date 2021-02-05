import '../css/app.scss';
import Background from './background';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Background(); // Si on passe des paramètres ici, ils seront récupérés dans les parenthèses de la méthode constructeur
    }
}

new App();
