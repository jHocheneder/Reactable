import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { myMaterialModules } from './myMaterialModules/myMaterialModules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenueComponent } from './menue/menue.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    MenueComponent
  ],
  imports: [
    BrowserModule,
    myMaterialModules,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
