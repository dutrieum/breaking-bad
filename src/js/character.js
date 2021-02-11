import $ from 'jquery';
import CharacterTemplate from './hbs/character.hbs';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Character {

  constructor() {
    this.initEls();
    this.initEvents();
  }

  initEls() {
    this.$els = {
      character: $('.js-character'),
    }
  }

  initEvents() {
    this.getCharacter();
  }

  getCharacter() {
    const api = {
      endpoint: 'https://www.breakingbadapi.com/api/characters',
      params: {
        'per_page': 1,
      },
    };
    $.ajaxSetup({cache: false}); // Sinon il affiche la même citation pour économiser le cache
    $.getJSON(api.endpoint, api.params)
      .then( (response) => { // Il le lit à la suite de la ligne au-dessus mais on fait un retour à la ligne pour la lisibilité
        this.renderCharacter(response);
      })
      .catch( (error) => {
        console.log('Error quote', error);
      })
  }

  renderCharacter(characterData) {
    //console.log(characterData);
    const nameContent = characterData[0].name; //Chemin visible dans l'inspecteur du navigateur
    const nicknameContent = characterData[0].nickname;
    const birthdayContent = characterData[0].birthday;
    const portrayedContent = characterData[0].portrayed;
    const occupationContent = characterData[0].occupation;
    const statusContent = characterData[0].status;
    const imageContent = characterData[0].img;

    const character = CharacterTemplate({nameTemplate: nameContent, nicknameTemplate: nicknameContent, imageTemplate: imageContent, birthdayTemplate: birthdayContent, portrayedTemplate: portrayedContent, occupationTemplate: occupationContent, statusTemplate: statusContent});

    this.$els.character.html(character);
  }
}
