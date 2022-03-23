import { Component, OnInit } from '@angular/core';
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
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

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

		this.buildingService.getBuildings().subscribe((building) => {
			var newBuilding: Building[] = [];
			var i = 0;
			building.forEach((res) => {
				if (res.userId == this.userId) {
					newBuilding.push(building[i]);
				}
				i++;
			});

			this.buildings = newBuilding;
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
			setTimeout(() => (this.message = ''), 3000);
			form.reset();
		});
	}

	setFloor(buildingName: string) {
		this.buildings.forEach((data) => {
			if (data.name == buildingName) {
				this.floors = data.floor;
			}
		});
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
