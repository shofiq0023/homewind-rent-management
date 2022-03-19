import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	email!: string;
	password!: string;
	message: string = '';

	constructor(public router: Router, private auth: Auth) {}

	ngOnInit(): void {}

	async onSubmit() {
		if (
			await signInWithEmailAndPassword(
				this.auth,
				this.email,
				this.password
			).catch((err) => {
				this.message = 'Credentials not valid';
			})
		) {
			localStorage.setItem('loggedIn', JSON.stringify(true));
			localStorage.setItem(
				'userId',
				JSON.stringify(this.auth.currentUser?.uid)
			);
			this.router.navigate(['home']);
		}
	}
}
