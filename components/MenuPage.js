export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/MenuPage.css");
      const css = await request.text();
      styles.textContent = css;
    }
    loadCSS();
  }

  // when the component is attached to the dom
  // when the router creates the element and appends it to the main html element
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appmenuchange", () => {
      this.render();
    });
  }
  render() {
    if (app.store.menu) {
      this.root.querySelector("#menu").innerHTML = "";
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
            <h3>${category.name}</h3>
            <ul class='category'></ul>
            `;
        this.root.querySelector("#menu").appendChild(liCategory);

        category.products.forEach((prod) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(prod);
          liCategory.querySelector("ul").appendChild(item);
        });
      }
    } else {
      this.root.querySelector("#menu").textContent = "Loading...";
    }
  }
}

// now the browser will know we are defining a web component
customElements.define("menu-page", MenuPage);
