import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  description: string;
  status: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent implements OnInit {
  list: Todo[] = [];
  desc: string = '';

  addTodo() {
    const id =
      this.list.length == 0 ? 1 : this.list[this.list.length - 1].id + 1;
    const todo = {
      id: id,
      description: this.desc,
      status: false,
      editing: false,
    };

    this.list.push(todo);
    this.desc = '';
  }

  deleteTodo(id: number) {
    this.list = this.list.filter((item) => item.id != id);
  }

  disabledButton() {
    const arrayFiltro = this.list.filter((item) => item.status === true);
    console.log('hhh');
    return arrayFiltro.length === 0;
  }

  deleteAllTaskComplet() {
    this.list = this.list.filter((item) => item.status != true);
  }

  constructor() {}

  ngOnInit(): void {}
}
