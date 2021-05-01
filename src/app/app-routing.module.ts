import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';


const routes: Routes = [
  { path: 'Demande-Conge-Component', component:DemandeCongeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
