import { Component, OnInit, Input } from '@angular/core';
import { Renter } from 'src/app/models/renter.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RenterService } from 'src/app/services/renter.service';
import { FlatService } from 'src/app/services/flat.service';
import { BuildingService } from 'src/app/services/building.service';
import { Building } from 'src/app/models/building.model';

@Component({
	selector: 'app-renter-modal',
	templateUrl: './renter-modal.component.html',
	styleUrls: ['./renter-modal.component.css'],
})
export class RenterModalComponent implements OnInit {
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	@Input() renter!: Renter;

	buildings: Building[] = [];
	floors: number[] = [];
	flats: string[] = [];

	constructor(
		public activeModal: NgbActiveModal,
		private renterService: RenterService,
		private buildingService: BuildingService,
		private flatService: FlatService
	) {}

	ngOnInit(): void {
		this.buildingService.getBuildings().subscribe((res) => {
			var newBuilding: Building[] = [];
			var i = 0;
			res.forEach((data) => {
				if (data.userId == this.userId) {
					newBuilding.push(res[i]);
				}
				i++;
			});
			this.buildings = newBuilding;
		});
		this.setNewFloor(this.renter.building);
	}

	async setNewFloor(buildingName: string) {
		var newFloor = await this.buildingService.getFloor(buildingName);
		// @ts-ignore
		await newFloor.forEach((data) => {
			this.floors.push(data);
		});
	}

	onSubmit() {
		this.renterService.updateRenter(this.renter).then(() => {
			this.activeModal.close();
		});
	}

	async setFloor(buildingName: string) {
		console.log('change works');
		this.floors = [];
		let newFloor = await this.buildingService.getFloor(buildingName);

		// @ts-ignore
		newFloor.forEach((data) => {
			this.floors.push(data);
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
	}
}
