import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFormComponent } from './main-form/main-form.component';
import { EqualValidator } from './equal-validator/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    MainFormComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
