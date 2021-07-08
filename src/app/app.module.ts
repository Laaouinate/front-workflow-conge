import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListeDemandeManagerComponent } from './liste-demande-manager/liste-demande-manager.component';
import { ListeDemandeHrComponent } from './liste-demande-hr/liste-demande-hr.component';
import { ProcessComponent } from './process/process.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import { ListDemandeAgentComponent } from './list-demande-agent/list-demande-agent.component';



@NgModule({
  declarations: [
    AppComponent,
    DemandeCongeComponent,
    ListeDemandeManagerComponent,
    ListeDemandeHrComponent,
    ProcessComponent,
    ListeDemandeComponent,
    LoginComponent,
    ListDemandeAgentComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe,{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
