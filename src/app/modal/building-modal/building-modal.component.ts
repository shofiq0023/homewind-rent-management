import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Building } from 'src/app/models/building.model';
import { BuildingService } from 'src/app/services/building.service';

@Component({
	selector: 'app-building-modal',
	templateUrl: './building-modal.component.html',
	styleUrls: ['./building-modal.component.css'],
})
export class BuildingModalComponent implements OnInit {
	@Input() building!: Building;

	constructor(
		private buildingService: BuildingService,
		private activeModal: NgbActiveModal
	) {}

	ngOnInit(): void {}

	onSubmit() {
		this.buildingService.updateBuilding(this.building).then(() => {
			this.activeModal.close();
		});
	}
}
