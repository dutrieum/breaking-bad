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

  constructor(data) {
    this.characterData = data;
    this.initEls();
    this.initEvents();
  }

  initEls() {
    this.$els = {
      character: $('.js-character'),
    }
  }

  initEvents() {
    this.renderCharacter();
  }

  renderCharacter() {
    //console.log(characterData);
    const nameContent = this.characterData.name; //Chemin visible dans l'inspecteur du navigateur
    const nicknameContent = this.characterData.nickname;
    const birthdayContent = this.characterData.birthday;
    const portrayedContent = this.characterData.portrayed;
    const occupationContent = this.characterData.occupation;
    const statusContent = this.characterData.status;
    const imageContent = this.characterData.img;

    const character = CharacterTemplate({nameTemplate: nameContent, nicknameTemplate: nicknameContent, imageTemplate: imageContent, birthdayTemplate: birthdayContent, portrayedTemplate: portrayedContent, occupationTemplate: occupationContent, statusTemplate: statusContent});

    this.$els.character.html(character);
  }
}
