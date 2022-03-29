import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	email!: string;
	password!: string;
	message: string = '';

	constructor(
		public router: Router,
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
			this.userService.getUsers().subscribe((res) => {
				res.forEach((data) => {
					if (data.email == this.auth.currentUser?.email) {
						localStorage.setItem(
							'company',
							JSON.stringify(data.company)
						);
						return;
					}
				});
				this.router.navigate(['home']);
			});
		}
	}
}
