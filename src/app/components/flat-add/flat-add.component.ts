import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
	faLongArrowAltLeft,
	faCity,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Building } from 'src/app/models/building.model';
import { BuildingService } from 'src/app/services/building.service';
import { FlatService } from 'src/app/services/flat.service';

@Component({
	selector: 'app-flat-add',
	templateUrl: './flat-add.component.html',
	styleUrls: ['./flat-add.component.css'],
})
export class FlatAddComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));

	faArrowLeft = faLongArrowAltLeft;
	faCity = faCity;
	faUser = faUser;

	message!: string;

	buildingName!: string;
	buildingFloor!: number;
	flatNumber!: string;

	buildings: Building[] = [];
	floors: number[] = [];

	constructor(
		private flatService: FlatService,
		private buildingService: BuildingService,
		private router: Router
	) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

		this.buildingService.getBuildings().subscribe((res) => {
			this.buildings = res;
		});
	}

	onSubmit(form: NgForm) {
		const newFlat = {
			// @ts-ignore
			userId: JSON.parse(localStorage.getItem('userId')),
			buildingName: this.buildingName,
			buildingFloor: this.buildingFloor,
			flatNumber: this.flatNumber,
			rented: 'false',
		};

		this.flatService.addFlat(newFlat).then(() => {
			form.reset();
			this.message = 'New flat added';
		});
	}

	async setFloor(buildingName: string) {
		let newFloor = await this.buildingService.getFloor(buildingName);
		this.floors = [];
		// @ts-ignore
		for (let i = 1; i <= newFloor; i++) {
			this.floors.push(i);
		}
	}
}
