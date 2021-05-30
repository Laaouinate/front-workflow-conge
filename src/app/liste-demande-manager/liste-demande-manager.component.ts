import { Component, OnInit } from '@angular/core';
import { CongeService } from './../conge.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-liste-demande-manager',
  templateUrl: './liste-demande-manager.component.html',
  styleUrls: ['./liste-demande-manager.component.css']
})
export class ListeDemandeManagerComponent implements OnInit {

  public Datas:any;

  constructor(private congeservice: CongeService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListeDemandeManager();
  }

  getListeDemandeManager() {
    this.congeservice.getAll().subscribe(data =>{
      this.Datas =data;
      let  ss = this.Datas.map(element => element.taskData)
     // console.log(this.Datas)
    })
  }

  
  managerValidate(taskId) {
    let approved = true;
    this.congeservice.postManager(taskId,approved).subscribe(this.Datas = this.Datas.filter(data => 
      {data.taskId != taskId
        this.toastr.success("Demande a été validée")
      }));
  }

    
  managerAnnuler(taskId) {
    let approved = false;
    this.congeservice.postManager(taskId,approved).subscribe(this.Datas = this.Datas.filter(data => 
      {data.taskId != taskId
        this.toastr.error("Demande a été Annulée")
      }));
  }
}
