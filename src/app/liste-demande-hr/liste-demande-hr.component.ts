import { CongeService } from './../conge.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-demande-hr',
  templateUrl: './liste-demande-hr.component.html',
  styleUrls: ['./liste-demande-hr.component.css']
})
export class ListeDemandeHrComponent implements OnInit {

  public Datas:any;

  constructor(private congeservice: CongeService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListeDemandeHr();
  }


  getListeDemandeHr() {
    this.congeservice.getAllHr().subscribe(data =>{
      this.Datas =data;
    })
  }

  HrValidate(taskId,username) {
    let approvedRH = true;
    // this.congeservice.postHr(taskId,approvedRH).subscribe(this.Datas =this.Datas.filter(data => {data.taskId != taskId
    //   this.toastr.success("Demande a été validée")
    // }));
    console.log(taskId,username)
  }

  HrAnnuler(taskId) {
    let approvedRH = false;
    this.congeservice.postHr(taskId,approvedRH).subscribe(this.Datas =this.Datas.filter(data => {data.taskId != taskId
      this.toastr.error("Demande a été Annulée")
    }));
  }

}
