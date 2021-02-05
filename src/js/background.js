import $ from 'jquery';

/*
* Objectif : récupérer une image aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une image de façon asynchrone à partir de l'API d'Unsplash (https://source.unsplash.com/)
* 3- Définir l'image comme fond
* */
export default class Background {
  constructor () {
    this.initEls();
    this.initEvents();
  }

  initEls () {
    this.$els = { // Le $ devant els n'est pas obligatoire mais signifie que c'est un objet jquery (bonne pratique)
      background: $('.js-background'), // Étape 1
    };
    this.url = 'https://source.unsplash.com/collection'; // Étape 2
    this.cat = '212915'; // Étape 2
    this.size = '1920x1080'; // Étape 2
  }

  initEvents () {
    this.loadImage(); // Étape 2
  }

  loadImage () { // Étape 2
    const promise = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = `${this.url}/${this.cat}/${this.size}`;
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((image) => {
      this.addBackground(image); // Étape 3
    });

    promise.catch((error) => {
      console.log('Error with the Unsplash image', error);
    });
  }

  addBackground(image) { // Étape 3
    this.$els.background.css('background-image',`url(${image.src})`); //ATTENTION au type de guillemet utilisé ! C'est `` et pas ''
    this.$els.background.addClass('is-ready');
  }
}
