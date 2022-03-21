import { Component, OnInit } from '@angular/core';
import { getDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faLongArrowAltLeft, faCity } from '@fortawesome/free-solid-svg-icons';
import { Building } from 'src/app/models/building.model';
import { BuildingService } from 'src/app/services/building.service';
import { FlatService } from 'src/app/services/flat.service';
import { RenterService } from 'src/app/services/renter.service';

interface Alert {
	type: string;
	message: string;
}

@Component({
	selector: 'app-renter-add',
	templateUrl: './renter-add.component.html',
	styleUrls: ['./renter-add.component.css'],
})
export class RenterAddComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));

	faArrowLeft = faLongArrowAltLeft;
	faCity = faCity;
	message!: string;

	fullName!: string;
	mobile!: string;
	email!: string;
	address!: string;
	deal!: string;
	building!: string;
	floor!: number;
	flat!: string;

	buildings: Building[] = [];
	floors: number[] = [];
	flats: string[] = [];

	constructor(
		private renterService: RenterService,
		private buildingService: BuildingService,
		private flatService: FlatService,
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
		const newRenter = {
			// @ts-ignore
			userId: JSON.parse(localStorage.getItem('userId')),
			fullName: this.fullName,
			mobile: this.mobile,
			email: this.email,
			address: this.address,
			deal: this.deal,
			building: this.building,
			floor: this.floor,
			flat: this.flat,
		};

		this.renterService.addRenter(newRenter).then(() => {
			this.message = 'Add successful';
			form.reset();
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

	async getFlats(floor: number, buildingName: string) {
		let newFlats = await this.flatService.getFlatByFloor(
			floor,
			buildingName
		);
		this.flats = [];

		newFlats.forEach((doc) => {
			this.flats.push(doc);
		});

		console.log(this.flats);
	}
}
