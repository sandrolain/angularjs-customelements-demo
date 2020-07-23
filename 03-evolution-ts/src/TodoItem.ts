import cssString from "../static/style.css" ;

class TodoItem extends HTMLElement {
  static get observedAttributes (): string[] {
    return ["done"];
  }
  constructor () {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.innerHTML = /*html*/`
    <style type="text/css">${cssString}</style>
    <label class="checkbox">
      <input type="checkbox" />
      <span><slot></slot></span>
    </label>
    `;
  }

  connectedCallback (): void {
    const done = this.getAttribute("done") === "true";

    const input = this.shadowRoot.querySelector("input");
    input.checked = done;
    input.addEventListener("change", () => {
      this.setAttribute("done", input.checked ? "true" : "false");
    });
    this.shadowRoot.querySelector("span").classList.toggle("done-true", done);
  }

  disconnectedCallback (): void {
    //
  }

  attributeChangedCallback (name: string, oldValue: string, newValue: string): void {
    if(oldValue !== newValue) {
      if(name === "done") {
        const done = (newValue === "true");
        this.shadowRoot.querySelector("input").checked = done;
        this.shadowRoot.querySelector("span").classList.toggle("done-true", done);
        this.dispatchEvent(new CustomEvent("done-changed", {
          bubbles: true,
          detail: {
            value: done
          }
        }));
      }
    }
  }
}


window.customElements.define("todo-item", TodoItem);
