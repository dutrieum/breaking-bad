import $ from 'jquery';
import QuoteTemplate from './hbs/quote.hbs';

/*
* Objectif : récupérer une citation aléatoire à partir d'une API et l'afficher
*
* Étapes :
* 1- Créer une référence vers les éléments du DOM qu'on va utiliser
* 2- Récupérer une citation aléatoire à partir de l'API de QuotesOnDesign (https://quotesondesign.com/api/)
* 3- Afficher la citation
* */

export default class Quote {

  constructor() {
    this.initEls();
    this.initEvents();
  }

  initEls() {
    this.$els = {
    //  quoteText: $('.js-quote-text'), // Étape 1
    //  quoteAuthor: $('.js-quote-author'), // Étape 1
      container: $('.js-container'), // Étape 1
      quote: $('.js-quote')
    }
  }

  initEvents() {
    this.getQuote();
  }

  getQuote() {
    const api = {
      endpoint: 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand',
      params: {
        'per_page': 1,
      },
    };
    $.ajaxSetup({cache: false}); // Sinon il affiche la même citation pour économiser le cache
    $.getJSON(api.endpoint, api.params)
      .then( (response) => { // Il le lit à la suite de la ligne au-dessus mais on fait un retour à la ligne pour la lisibilité
        this.renderQuote(response);
      })
      .catch( (error) => {
        console.log('Error quote', error);
      })
  }

  renderQuote(quoteData) {
    const quoteContent = quoteData[0].content.rendered; //Chemin visible dans l'inspecteur du navigateur
    const quoteAuthor = quoteData[0].title.rendered;

    //this.$els.quoteText.prepend(quoteContent); // On utilise prepend au lieu de text pour qu'il interprète les <p> de la citation
    //this.$els.quoteAuthor.text(quoteAuthor);

    const quote = QuoteTemplate({text: quoteContent, author: quoteAuthor});
    this.$els.quote.html(quote);
    this.$els.container.addClass('is-ready');
  }
}
