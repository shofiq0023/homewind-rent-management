import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
	faLongArrowAltLeft,
	faUserFriends,
	faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import { BuildingService } from 'src/app/services/building.service';

@Component({
	selector: 'app-building-add',
	templateUrl: './building-add.component.html',
	styleUrls: ['./building-add.component.css'],
})
export class BuildingAddComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	faArrowLeft = faLongArrowAltLeft;
	faUser = faUserFriends;
	faHouse = faHouseUser;

	message!: string;

	name!: string;
	number!: string;
	floor!: number;

	constructor(
		private buildingService: BuildingService,
		private router: Router
	) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

		var newFloor: number[] = [];
		for (let i = 1; i <= this.floor; i++) {
			newFloor.push(i);
		}

		const newBuilding = {
			userId: this.userId,
			name: this.name,
			number: this.number,
			floor: newFloor,
		};

		this.buildingService.addBuilding(newBuilding).then(() => {
			this.message = 'New building added';
			form.reset();
			setTimeout(() => (this.message = ''), 3000);
		});
	}
}
