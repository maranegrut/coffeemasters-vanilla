const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property === "menu") {
      // announce that menu has been changed
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (property === "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export default proxiedStore;
