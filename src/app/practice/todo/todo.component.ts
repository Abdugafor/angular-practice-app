import { Component, EventEmitter, Output } from '@angular/core';
import { TodosService } from '../../todos.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {

  todos: string[] = [];
  todoName: string = '';
  
  constructor(
    private todoService: TodosService
  ) {
     this.todos = todoService.getTodos();
  }

  onAdd(inputText: string) {
    if (inputText !== '') {
      this.todoService.addTodo(inputText);
      this.todos = this.todoService.getTodos();
    }
    
  }

}
