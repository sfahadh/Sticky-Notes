import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form/form.component';
import { TodoListComponent } from './components/home/todo-list/todo-list.component';
import { FooterBtnComponent } from './components/home/footer-btn/footer-btn.component';
import { DropdownComponent } from './components/form/dropdown/dropdown.component';
import { InputsComponent } from './components/form/inputs/inputs.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    TodoListComponent,
    FooterBtnComponent,
    DropdownComponent,
    InputsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
