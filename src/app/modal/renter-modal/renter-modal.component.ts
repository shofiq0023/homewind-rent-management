import { Component, OnInit, Input } from '@angular/core';
import { Renter } from 'src/app/models/renter.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RenterService } from 'src/app/services/renter.service';
import { FlatService } from 'src/app/services/flat.service';
import { BuildingService } from 'src/app/services/building.service';
import { Building } from 'src/app/models/building.model';
import { Flat } from 'src/app/models/flat.model';

@Component({
	selector: 'app-renter-modal',
	templateUrl: './renter-modal.component.html',
	styleUrls: ['./renter-modal.component.css'],
})
export class RenterModalComponent implements OnInit {
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
			this.buildings = res;
			console.log(this.buildings);
		});
	}

	onSubmit() {
		this.renterService.updateRenter(this.renter).then(() => {
			this.activeModal.close();
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
	}
}
