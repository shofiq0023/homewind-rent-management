import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	faUserFriends,
	faList,
	faBuilding,
	faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import { Building } from 'src/app/models/building.model';
import { Flat } from 'src/app/models/flat.model';
import { Renter } from 'src/app/models/renter.model';
import { BuildingService } from 'src/app/services/building.service';
import { FlatService } from 'src/app/services/flat.service';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));
	company: string = 'The Homewind';

	faUserList = faUserFriends;
	faList = faList;
	faHouse = faHouseUser;
	faBuilding = faBuilding;

	renters: Renter[] = [];
	buildings: Building[] = [];
	flats: Flat[] = [];

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
		// @ts-ignore
		this.company = JSON.parse(localStorage.getItem('company'));

		this.renterService.getRenters().subscribe((renter) => {
			var newRenters: Renter[] = [];
			var i = 0;
			renter.forEach((res) => {
				if (res.userId == this.userId) {
					newRenters.push(renter[i]);
				}
				i++;
			});

			this.renters = newRenters;
		});
		this.buildingService.getBuildings().subscribe((building) => {
			var newBuliding: Building[] = [];
			var i = 0;
			building.forEach((res) => {
				if (res.userId == this.userId) {
					newBuliding.push(building[i]);
				}
				i++;
			});

			this.buildings = newBuliding;
		});
		this.flatService.getFlats().subscribe((flat) => {
			var newFlats: Flat[] = [];
			var i = 0;
			flat.forEach((res) => {
				if (res.userId == this.userId) {
					newFlats.push(flat[i]);
				}
				i++;
			});

			this.flats = newFlats;
		});
	}
}
