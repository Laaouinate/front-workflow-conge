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
  public date = this.datepipe.transform(new Date(), 'dd-MM-yyyy');


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
      commentaire: ['', [Validators.required, Validators.minLength(5),Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  SaveDemande() {
    let form = this.formDemande.value;
    form.dateDebut=this.datepipe.transform(form.dateDebut, 'dd-MM-yyyy');
    form.dateFin=this.datepipe.transform(form.dateFin, 'dd-MM-yyyy');

    this.congeservice.create(form).subscribe(response => {
      this.formDemande.reset()
      this.toastr.success("Demande a été crée.")})
  //  console.log(form);
  }
}
