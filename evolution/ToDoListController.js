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

  updateList() {
    this.ToDoListService.getAll().then((data) => {
      this.todos = data;
      this.$scope.$apply();
    })
  }

  addTodo() {
    this.ToDoListService.add({ text: this.todoText, done: false }).then(() => {
      this.todoText = "";
      this.updateList();
    });
  }

  remaining() {
    return this.todos.reduce((total, item) => (total + (item.done ? 0 : 1)), 0);
  }

  archive() {
    this.ToDoListService.archive().then(() => this.updateList());
  }
}
