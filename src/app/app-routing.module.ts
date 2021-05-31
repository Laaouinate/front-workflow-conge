import { ListeDemandeManagerComponent } from './liste-demande-manager/liste-demande-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { ListeDemandeHrComponent } from './liste-demande-hr/liste-demande-hr.component';


const routes: Routes = [
  { path: 'Demande-Conge-Component', component:DemandeCongeComponent},
  { path: 'Liste-Conge-Component', component:ListeDemandeManagerComponent},
  { path: 'Liste-Conge-Hr-Component',component:ListeDemandeHrComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
