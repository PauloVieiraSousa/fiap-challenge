import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ChartsModule
  ],
  exports: [
    BrowserModule,
    ReactiveFormsModule,
    HeaderComponent,
    FontAwesomeModule,
    ChartsModule
  ]
})
export class SharedModule { 

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
