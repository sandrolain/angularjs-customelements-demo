import * as angular from "angular";
import "./ce-bind";
import "./TodoItem";
import { ToDoListService } from "./ToDoListService";
import { ToDoListController } from "./ToDoListController";

angular
  .module("todoApp", ["robdodson.ce-bind"])
  .service("ToDoListService", ToDoListService)
  .controller("ToDoListController", ToDoListController);
