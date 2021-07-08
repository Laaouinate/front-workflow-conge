import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from './../conge.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  public Process:any;

  constructor(private congeservice: CongeService,
              private router : ActivatedRoute) {}

  ngOnInit(): void {

    this.Process = this.router.snapshot.paramMap.get('process')
    this.getPrcess(this.Process)
  //console.log(this.Process)
  }

  getPrcess(processId) {
    this.congeservice.process(processId).subscribe(response =>{
     this.Process =  response;
    })
    console.log(this.Process)

  }

}
