import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';
import { CongeService } from '../conge.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private congeservice: CongeService,
              private tokenService: TokenService,
              private accountService: AccountService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login()  {

    this.congeservice.login(this.loginForm.value).subscribe(
   //   this.handleResponse(res)

       res => {
        this.handleResponse(res)
       },
       err => {
        this.toastr.error("Merci de vérifier votre login/Mote de passe");
       }
   );
  }

  handleResponse(res) {
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/Demande-Conge-Component")
  }
}
