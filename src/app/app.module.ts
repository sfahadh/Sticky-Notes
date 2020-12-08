import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form/form.component';
import { FooterBtnComponent } from './components/home/footer-btn/footer-btn.component';
import { DropdownComponent } from './components/form/dropdown/dropdown.component';
import { InputsComponent } from './components/form/inputs/inputs.component';
import { HomeComponent } from './components/home/home/home.component';
import { StickyNoteListComponent } from './components/home/sticky-note-list/sticky-note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    FooterBtnComponent,
    DropdownComponent,
    InputsComponent,
    HomeComponent,
    StickyNoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
