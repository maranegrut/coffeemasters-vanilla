import API from "./API.js";

export const loadData = async () => {
  app.store.menu = await API.fetchMenu();
};
