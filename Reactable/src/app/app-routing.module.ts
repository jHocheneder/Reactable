import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { MenueComponent } from './menue/menue.component';


const routes: Routes = [
  { path: "profil", component: ProfilComponent },
  { path: "menue", component: MenueComponent }//,
//  { path: "", redirectTo: "profil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
