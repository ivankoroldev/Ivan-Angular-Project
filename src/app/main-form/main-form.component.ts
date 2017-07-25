import { Component, OnInit } from '@angular/core';

export class User{
    email: string;
    password: string;
    confirmpassword: string;
}

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})

export class MainFormComponent implements OnInit {

	user: User = new User();

  	constructor() { 
  		console.log(this.user);
  	}

  	ngOnInit() {

  	}

  	save(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }
}
