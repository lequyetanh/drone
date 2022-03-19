import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidden
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  login(){
      this._router.navigate(['/home']);
      this.hidden = true;
  }
}
