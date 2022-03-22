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

		this.renterService.getRenters().subscribe((renter) => {
			var i = 0;
			renter.forEach((res) => {
				if (res.userId == this.userId) {
					this.renters.push(renter[i]);
				}
				i++;
			});
		});
		this.buildingService.getBuildings().subscribe((building) => {
			var i = 0;
			building.forEach((res) => {
				if (res.userId == this.userId) {
					this.buildings.push(building[i]);
				}
				i++;
			});
		});
		this.flatService.getFlats().subscribe((flat) => {
			var i = 0;
			flat.forEach((res) => {
				if (res.userId == this.userId) {
					this.flats.push(flat[i]);
				}
				i++;
			});
		});
	}
}
