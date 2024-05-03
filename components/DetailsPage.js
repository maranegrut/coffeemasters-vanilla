export class DetailsPage extends HTMLElement {
  constructor() {
    super();
  }
}

// now the browser will know we are defining a web component
customElements.define("details-page", DetailsPage);
