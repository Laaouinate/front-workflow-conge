import { Router } from '@angular/router';
import { TokenService } from './../token.service';
import { CongeService } from './../conge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demande-agent',
  templateUrl: './list-demande-agent.component.html',
  styleUrls: ['./list-demande-agent.component.css']
})
export class ListDemandeAgentComponent implements OnInit {

  username:any;
  ListeDemandeAgent: any;
  constructor(private congeservice: CongeService,
              private tokenService: TokenService,
              private router :Router) { }

  ngOnInit(): void {
   this.username = this.tokenService.getInfos().sub;
   this.getRechercheAll();
   // console.log(this.username);
  }

  getRechercheAll() {
    this.congeservice.getRecherchAllAgent(this.username).subscribe(
      data => {this.ListeDemandeAgent = data;
      //  console.log(this.ListeDemandeAgent)
      })

  }


  getProcess(process) {
    this.router.navigate(['/processus',process])
  }

}
