import { TodoItem } from "./TodoItem";

const waitUntil = (fn: () => boolean, timeout: number = 5000, interval: number = 100): Promise<void> => {
  return new Promise((resolve, reject) => {
    let tot: number = null;
    const itv = window.setInterval(() => {
      if(fn()) {
        window.clearTimeout(tot);
        window.clearInterval(itv);
        resolve();
      }
    }, interval);
    tot = window.setTimeout(() => {
      window.clearInterval(itv);
      reject(new Error("Timeout expired"));
    }, timeout);
  });
};

describe("ToDoItem", () => {

  beforeEach(() => {
    if(!window.customElements.get("todo-item")) {
      window.customElements.define("todo-item", TodoItem);
    }
  });

  test("Verify element shadow DOM", async () => {
    const el: TodoItem = document.createElement("todo-item") as TodoItem;
    document.body.appendChild(el);

    await waitUntil(() => !!el.shadowRoot);

    expect(el.shadowRoot).toBeDefined();
    expect(el.shadowRoot).not.toBeNull();
    expect(el.shadowRoot.querySelectorAll("*").length).toBe(5);
  });

});
