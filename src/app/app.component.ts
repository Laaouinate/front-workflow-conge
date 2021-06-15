import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'node:http';
import { AccountService } from './account.service';
import { CongeService } from './conge.service';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-workflow-conge';

  currentUser: null;
  Roles: Agent;

  constructor(private congeservice: CongeService,
              private accountService: AccountService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  this.accountService.authStatus.subscribe(res => {
    this.currentUser = this.tokenService.getInfos();

    this.Roles = this.tokenService.getInfos()?.Roles;

    })
   // console.log(this.currentUser);
  }

  logout() {
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/Login");
  }

}
