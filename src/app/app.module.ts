import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './practice/todo/todo.component';
import { TodosService } from './todos.service';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { HelpComponent } from './help/help.component';
import { FaqComponent } from './help/faq/faq.component';
import { ContactsComponent } from './help/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    PracticeComponent,
    HelpComponent,
    FaqComponent,
    ContactsComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
