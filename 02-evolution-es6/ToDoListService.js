export default class ToDoListService {
  constructor() {
    this.todos = [
      { text: "learn AngularJS", done: true },
      { text: "build an AngularJS app", done: false },
    ];
  }

  getAll() {
    return Promise.resolve(this.todos.slice(0));
  }

  add(item) {
    this.todos.push(item);
    return Promise.resolve({ success: true });
  }

  archive() {
    this.todos = this.todos.filter((item) => !item.done);
    return Promise.resolve({ success: true });
  }
}
