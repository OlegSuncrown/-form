import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ValidatorsModule } from './validators/validators.module';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './template-driven-forms/signup-form/signup-form.component';
import { SignupReactiveFormComponent } from './reactive-forms/signup-reactive-form/signup-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ValidatorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
