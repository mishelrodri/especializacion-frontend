import { Component, OnInit } from '@angular/core';
interface Todo {
  id: number;
  content: string;
  completed: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent {
  title = 'ngModel Todo List';
  todos: Todo[] = [
    {
      id: 1,
      content: 'todos',
      completed: false,
      editing: false,
    },
  ];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    const newId =
      this.todos.length === 0 ? 1 : this.todos[this.todos.length - 1].id + 1;
    const newTodo = {
      id: newId,
      content: this.newTodo.trim(),
      completed: false,
      editing: false,
    };
    this.todos.push(newTodo);
    this.newTodo = '';
  }

  borrar(todo: Todo) {
    this.todos = this.todos.filter(function (t) {
      return t !== todo;
    });
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  disabled() {
    return this.todos.filter((t) => t.completed).length === 0;
  }
}
