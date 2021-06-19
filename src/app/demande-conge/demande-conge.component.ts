import { CongeService } from './../conge.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';




@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {

  public formDemande: FormGroup;
  public form: any;


  public leaveBalance: boolean = false;
  public applyLeave: boolean = true;
  public fromDate = new Date();
  public toDate = new Date();
  public days: any;
  public todateSec: any;
  public fromdateSec: any;
  public millisecondsPerDay: any;
  public diff: any;
  public weeks: any;
  public leaveDays = '';


  constructor(private congeservice: CongeService,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.demandeForm();

  }

  demandeForm() {
    this.formDemande = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      congeType: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]],
      empName: ['', Validators.required],
      comment: ['', Validators.required],
      nombreJours:[]
    });
  }

  SaveDemande() {
    this.form = this.formDemande.value;

    this.congeservice.create(this.form).subscribe(response => {
    this.formDemande.reset();
    this.toastr.success("Demande a été crée")});
    //console.log(this.form);
  

  }

  onKeyUpfromdate(event: any) {

    this.fromDate = event.target.value;
    this.todateSec = new Date(this.toDate);
    this.fromdateSec = new Date(this.fromDate);
    if (this.todateSec < this.fromdateSec) {
     // alert('date fin doit être plus inferieur que date debut');
      this.toastr.error("Merci d'enter une date validée");

    }



    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0, 0, 0, 1); // Start just after midnight
    this.todateSec.setHours(23, 59, 59, 999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);

    // Subtract two weekend days for every week in between
    this.weeks = Math.floor(this.days / 7);
    this.days = this.days - (this.weeks * 2);

    // Handle special cases
    this.fromdateSec = this.fromdateSec.getDay();
    this.todateSec = this.todateSec.getDay();

    // Remove weekend not previously removed. 
    if (this.fromdateSec - this.todateSec > 1)
      this.days = this.days - 2;

    // Remove start day if span starts on Sunday but ends before Saturday
    if (this.fromdateSec == 0 && this.todateSec != 6)
      this.days = this.days - 1;

    // Remove end day if span ends on Saturday but starts after Sunday
    if (this.todateSec == 6 && this.fromdateSec != 0) {
      this.days = this.days - 1;
    }
    this.leaveDays = this.days;
    if (this.leaveDays == 'NaN' || this.leaveDays == '' || this.leaveDays <= '0' || this.leaveDays == 'undefined') {
      this.leaveDays = '';
    } else {
      this.leaveDays = this.days;
    }

  }


  onKeyUptoDate(event: any) {
    this.toDate = event.target.value;

    this.todateSec = new Date(this.toDate);
    this.fromdateSec = new Date(this.fromDate);

    if (this.todateSec < this.fromdateSec) {
     // alert('date fin doit être plus inferieur que date debut');
     this.toastr.error("Merci d'enter une date validée");

    }

    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0, 0, 0, 1); // Start just after midnight
    this.todateSec.setHours(23, 59, 59, 999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);

    // Subtract two weekend days for every week in between
    this.weeks = Math.floor(this.days / 7);
    this.days = this.days - (this.weeks * 2);

    // Handle special cases
    this.fromdateSec = this.fromdateSec.getDay();
    this.todateSec = this.todateSec.getDay();

    // Remove weekend not previously removed. 
    if (this.fromdateSec - this.todateSec > 1)
      this.days = this.days - 2;

    // Remove start day if span starts on Sunday but ends before Saturday
    if (this.fromdateSec == 0 && this.todateSec != 6)
      this.days = this.days - 1;

    // Remove end day if span ends on Saturday but starts after Sunday
    if (this.todateSec === 6 && this.fromdateSec !== 0) {
      this.days = this.days - 1;
    }
    this.leaveDays = this.days;
    if (this.leaveDays === 'NaN' || this.leaveDays === '' || this.leaveDays <= '0' || this.leaveDays == 'undefined') {
      this.leaveDays = '';
    } else {
      this.leaveDays = this.days;
    }

  }
  
}
