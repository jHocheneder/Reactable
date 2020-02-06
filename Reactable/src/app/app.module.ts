import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { myMaterialModules } from './myMaterialModules/myMaterialModules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    myMaterialModules,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
