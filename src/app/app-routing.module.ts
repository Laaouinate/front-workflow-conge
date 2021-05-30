import { ListeDemandeManagerComponent } from './liste-demande-manager/liste-demande-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';


const routes: Routes = [
  { path: 'Demande-Conge-Component', component:DemandeCongeComponent},
  { path: 'Liste-Conge-Component', component:ListeDemandeManagerComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
