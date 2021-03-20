import $ from 'jquery';
import QuotationTemplate from './hbs/quotation.hbs';


export default class Quotation {

  constructor(response) {
    this.response = response;
    this.initEls();
    this.initEvents();
    console.log(response);
  }

  initEls() {
    this.$els = {
      quotation: $('.js-quotation'),
    }
  }

  initEvents() {
    this.renderQuotation();
  }

  renderQuotation() {
    const quoteContent = this.response[0].quote; //Chemin visible dans l'inspecteur du navigateur
    const authorContent = this.response[0].author;

    const quotation = QuotationTemplate({quoteTemplate: quoteContent, authorTemplate: authorContent});

    this.$els.quotation.html(quotation);
  }
}
