import { ListDemandeAgentComponent } from './list-demande-agent/list-demande-agent.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { ListeDemandeManagerComponent } from './liste-demande-manager/liste-demande-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { ListeDemandeHrComponent } from './liste-demande-hr/liste-demande-hr.component';
import { ProcessComponent } from './process/process.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthAfterGuard } from './auth-after.guard';


const routes: Routes = [
  { path: 'Demande-Conge-Component', component:DemandeCongeComponent , canActivate: [AuthGuard]},
  { path: 'Liste-Conge-Component', component:ListeDemandeManagerComponent , canActivate: [AuthGuard]},
  { path: 'Liste-Conge-Hr-Component', component:ListeDemandeHrComponent , canActivate: [AuthGuard]},
  { path: 'processus/:process', component:ProcessComponent , canActivate: [AuthGuard]},
  { path: 'Liste-Demande', component:ListeDemandeComponent , canActivate: [AuthGuard]},
  { path: 'Liste-Demande-agent', component:ListDemandeAgentComponent , canActivate: [AuthGuard]},
  { path: 'Login',component:LoginComponent, canActivate: [AuthAfterGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
