export class OrdersPage extends HTMLElement {
  constructor() {
    super();
  }
}

// now the browser will know we are defining a web component
customElements.define("orders-page", OrdersPage);
