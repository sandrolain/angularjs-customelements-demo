import { ToDoListService, ToDo } from "./ToDoListService";
import { LitElement, customElement, TemplateResult, CSSResult, html, css, unsafeCSS, property, query } from "lit-element";

@customElement("todo-app")
export class TodoApp extends LitElement {
  @property({ type: Array })
  private todos: ToDo[] = [];

  @query("#add-field")
  private input: HTMLInputElement;

  private service: ToDoListService = new ToDoListService();

  connectedCallback (): void {
    super.connectedCallback();
    this.updateList();
  }

  render (): TemplateResult {
    return html`
      <h2>Todo</h2>
      <div>
        <span>${this.remaining()} of ${this.todos.length} remaining</span>
        [ <a href="" @click="${this.archive}">archive</a> ]
        <ul class="unstyled">${this.todos.map((todo) => html`
          <li><todo-item ?done="${todo.done}" @done-changed="${(e: CustomEvent): void => {
            todo.done = e.detail.value;
          }}">${todo.text}</todo-item></li>
        `)}
        </ul>
        <form @submit="${this.addTodo}">
          <input type="text" id="add-field"  size="30" placeholder="add new todo here">
          <input class="btn-primary" type="submit" value="add">
        </form>
      </div>
    `;
  }

  async updateList (): Promise<void> {
    const data = await this.service.getAll();
    this.todos = data;
  }

  async addTodo (e: Event): Promise<void>  {
    e.preventDefault();
    await this.service.add({ text: this.input.value, done: false });
    this.input.value = "";
    this.updateList();
  }

  remaining (): number {
    return this.todos.reduce((total, item) => (total + (item.done ? 0 : 1)), 0);
  }

  archive (e: Event): void {
    e.preventDefault();
    this.service.archive().then(() => this.updateList());
  }
}
