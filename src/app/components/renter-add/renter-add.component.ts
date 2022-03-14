import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

	constructor(
		private renterService: RenterService,
		private buildingService: BuildingService,
		private flatService: FlatService
	) {}

	ngOnInit(): void {
		this.buildingService.getBuildings().subscribe((res) => {
			this.buildings = res;
		});
		this.buildings.forEach((item) => console.log(item));
	}

	onSubmit(form: NgForm) {
		const newRenter = {
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

	setFloor(buildings: string) {
		console.log(buildings);
	}
}
