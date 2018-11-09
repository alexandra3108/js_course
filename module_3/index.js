import UIController from "./ui_controller.js";

export default class UIController {
    constructor() {
      this.regExp = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
      this.card = document.getElementById('card');
      this.mask = '0000-0000-0000-0000';
  }
  validCard() {
      if (!this.mask.test(this.card.value)) {
          this.card.style.border = "5px solid red";
      } else {
          this.card.style.border = "5px solid green";
      }
  }    
}

const uiController = new UIController();

