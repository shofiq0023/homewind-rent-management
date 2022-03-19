import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

	faArrowLeft = faLongArrowAltLeft;
	faUser = faUserFriends;
	faHouse = faHouseUser;

	message!: string;

	name!: string;
	number!: string;
	floor!: number;

	constructor(private buildingService: BuildingService) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		const newBuilding = {
			name: this.name,
			number: this.number,
			floor: this.floor,
		};

		this.buildingService.addBuilding(newBuilding).then(() => {
			this.message = 'New building added';
			form.reset();
		});
	}
}
