import { LitElement, html, css, customElement, property, TemplateResult, CSSResult, query, unsafeCSS } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement("todo-item")
export class TodoItem extends LitElement {
  @property({ type: Boolean })
  done: boolean = false;

  @query("input")
  input: HTMLInputElement;

  static get styles (): CSSResult {
    return css`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }
    `;
  }

  render (): TemplateResult {
    return html`
      <label class="checkbox">
        <input type="checkbox" ?checked="${this.done}" @change="${this.onChange}" />
        <span class="${classMap({ "done-true": this.done })}"><slot></slot></span>
      </label>
    `;
  }

  private onChange (): void {
    this.done = this.input.checked;
    this.dispatchEvent(new CustomEvent("done-changed", {
      bubbles: true,
      detail: {
        value: this.done
      }
    }));
  }
}
