import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CustomUser } from 'src/app/models/customUser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
	email!: string;
	company!: string;
	password: string = '';
	conPassword: string = '';
	message!: string;

	disableSubmit: boolean = true;

	constructor(
		private router: Router,
		private auth: Auth,
		private userService: UserService
	) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == true) {
			this.router.navigateByUrl('/home');
		}
	}

	async onSubmit() {
		if (
			await createUserWithEmailAndPassword(
				this.auth,
				this.email,
				this.password
			).catch((err) => {
				console.log(err.message);
				if (
					err.message ==
					'Firebase: Password should be at least 6 characters (auth/weak-password).'
				) {
					this.message = 'Password shorter than 6 characters';
				} else if (
					(err.message =
						'Firebase: Error (auth/email-already-in-use).')
				) {
					this.message = 'Email already in user';
				} else {
					this.message = 'There was an error';
				}
			})
		) {
			const newUser: CustomUser = {
				email: this.email,
				company: this.company,
				createdAt: new Date(),
			};
			this.userService.addUser(newUser);
			this.router.navigate(['login']);
		}
	}
}
