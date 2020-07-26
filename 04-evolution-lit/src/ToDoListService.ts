export interface ToDo  {
  text: string;
  done: boolean;
}

export class ToDoListService {
  private todos: ToDo[] = [];

  constructor () {
    this.todos = [
      { text: "learn AngularJS", done: true },
      { text: "build an AngularJS app", done: false }
    ];
  }

  getAll (): Promise<ToDo[]> {
    return Promise.resolve(this.todos.slice(0));
  }

  add (item: ToDo): Promise<{success: boolean}> {
    this.todos.push(item);
    return Promise.resolve({ success: true });
  }

  archive (): Promise<{success: boolean}> {
    this.todos = this.todos.filter((item: ToDo) => !item.done);
    return Promise.resolve({ success: true });
  }
}
