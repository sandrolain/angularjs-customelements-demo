import "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js";
import "./ce-bind.js";
import "./TodoItem.js";
import ToDoListService from "./ToDoListService.js";
import TodoListController from "./TodoListController.js";

angular
  .module("todoApp", ["robdodson.ce-bind"])
  .service("ToDoListService", ToDoListService)
  .controller("TodoListController", TodoListController);
