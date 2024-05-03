import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// link web components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrdersPage } from "./components/OrdersPage.js";

window.app = {};
app.store = Store;
app.router = Router;

// wait for the event before manipulating the dom
// happens before rendering
window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
