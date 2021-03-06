import { Component, OnInit } from '@angular/core';
import {
	faPencilAlt,
	faPlusCircle,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { BuildingService } from 'src/app/services/building.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuildingModalComponent } from 'src/app/modal/building-modal/building-modal.component';
import { Building } from 'src/app/models/building.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-building-list',
	templateUrl: './building-list.component.html',
	styleUrls: ['./building-list.component.css'],
})
export class BuildingListComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;

	buildings: Building[] = [];

	constructor(
		private buildingService: BuildingService,
		private modal: NgbModal,
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

	deleteBuilding(building: Building) {
		if (confirm('Do you want to delete this building?') == true) {
			this.buildingService.deleteBuilding(building);
		}
	}

	openModal(building: Building) {
		const modalRef = this.modal.open(BuildingModalComponent, {
			size: 'lg',
			centered: true,
		});
		modalRef.componentInstance.building = building;
	}
}
