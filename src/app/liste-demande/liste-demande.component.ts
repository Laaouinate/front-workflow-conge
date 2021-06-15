import { CongeService } from './../conge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent implements OnInit {

  public listDemande:any;
  constructor(private congeservice: CongeService) { }

  ngOnInit(): void {
    this.getListeDemande();
  }


  getListeDemande() {
    this.congeservice.getRechercheAll().subscribe(response => {
      this.listDemande = response;
     //  console.log(this.listDemande);
    })
  }

  search(args) {
    if( args.target.value.length === 0) {
      this.getListeDemande();
    } else {
      const value  = args.target.value;
      this.congeservice.getRecherche(value).subscribe(
        data => { this.listDemande = data}
      )
    }
    
  }

}
