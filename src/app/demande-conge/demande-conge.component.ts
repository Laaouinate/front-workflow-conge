import { CongeService } from './../conge.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {

  public formDemande: FormGroup;
 // public date = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
 public date = new Date();


  constructor(private congeservice: CongeService,
              private formBuilder: FormBuilder,
              public datepipe: DatePipe,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.demandeForm();
    //console.log(this.date);

  }

  demandeForm() {
    this.formDemande = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      congType: ['', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z]+$')]],
      empName: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  SaveDemande() {
    let form = this.formDemande.value;
    let ConvertDateDebut = new Date(form.dateDebut);
    let ConvertDateFin = new Date(form.dateFin);
    form.dateDebut=this.datepipe.transform(form.dateDebut, 'dd-MM-yyyy');
    form.dateFin=this.datepipe.transform(form.dateFin, 'dd-MM-yyyy');


    console.log(ConvertDateDebut);
    if( this.date > ConvertDateDebut || this.date > ConvertDateFin) {
      this.toastr.error("Merci d'enter une date validée");
    } else {
      
        this.congeservice.create(form).subscribe(response => {
        this.formDemande.reset();
        this.toastr.success("Demande a été crée")});
     //console.log(form);
    }
    
  }
}
