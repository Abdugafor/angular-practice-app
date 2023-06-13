import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})

export class PracticeComponent {
  public editMode = false
  personName: string = 'Abdugafor Gafarov'
  error = false
  onSwitch() {
    this.editMode = !this.editMode
  }
  onSave() {


    const filter = this.personName.split(' ').filter(item => item.length >= 1)

    if (this.personName !== '' && filter.length > 1) {
      this.editMode = !this.editMode
      this.error = false
    }else {
      this.error = true
    }
  }

  constructor(private router: Router) {

  }

  onNavigate() {
    this.router.navigate([''])
  }


}
