import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: string[] = ['task1', 'task2']

  constructor() { 
  }

  addTodo(name: string) {
    this.todos.push(name)
  }

  getTodos() {
    return this.todos
  }

  onConcole(text: string) {
    console.log(text)
  }
}
