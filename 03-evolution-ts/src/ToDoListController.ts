import { ToDoListService, ToDo } from "./ToDoListService";

export class ToDoListController {
  private todos: ToDo[] = [];

  public todoText: string = "";

  static get $inject (): string[] {
    return ["$scope", "ToDoListService"];
  }

  constructor (private $scope: ng.IScope, private service: ToDoListService) {

  }

  // Require AngularJS 1.6+
  $onInit (): void {
    this.updateList();
  }

  render (): void {
    this.$scope.$apply();
  }

  async updateList (): Promise<void> {
    const data = await this.service.getAll();
    this.todos = data;
    this.render();
  }

  async addTodo (): Promise<void>  {
    await this.service.add({ text: this.todoText, done: false });
    this.todoText = "";
    this.updateList();
  }

  remaining (): number {
    return this.todos.reduce((total, item) => (total + (item.done ? 0 : 1)), 0);
  }

  archive (): void {
    this.service.archive().then(() => this.updateList());
  }
}
