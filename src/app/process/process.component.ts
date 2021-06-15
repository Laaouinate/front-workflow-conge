import { CongeService } from './../conge.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  public Process:any;

  constructor(private congeservice: CongeService) { }

  ngOnInit(): void {
    let processId =2589
    this.getPrcess(processId);
  }

  getPrcess(processId) {
    this.congeservice.process(processId).subscribe(response =>{
     this.Process =  response;
     console.log(this.Process);
    })
  }

}
