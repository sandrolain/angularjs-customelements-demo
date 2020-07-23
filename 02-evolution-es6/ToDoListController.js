export default class ToDoListController {

  constructor($scope, ToDoListService) {
    this.$scope = $scope;
    this.ToDoListService = ToDoListService;
    this.todos = [];
  }

  // Require AngularJS 1.6+
  $onInit() {
    this.updateList();
  }

  render() {
    this.$scope.$apply();
  }

  async updateList() {
    const data = await this.ToDoListService.getAll();
    this.todos = data;
    this.render();
  }

  async addTodo() {
    await this.ToDoListService.add({ text: this.todoText, done: false });
    this.todoText = "";
    this.updateList();
  }

  remaining() {
    return this.todos.reduce((total, item) => (total + (item.done ? 0 : 1)), 0);
  }

  archive() {
    this.ToDoListService.archive().then(() => this.updateList());
  }
}
