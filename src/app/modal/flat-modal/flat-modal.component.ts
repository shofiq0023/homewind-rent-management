import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Flat } from 'src/app/models/flat.model';
import { FlatService } from 'src/app/services/flat.service';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-flat-modal',
	templateUrl: './flat-modal.component.html',
	styleUrls: ['./flat-modal.component.css'],
})
export class FlatModalComponent implements OnInit {
	@Input() flat!: Flat;

	constructor(
		public activeModal: NgbActiveModal,
		private flatService: FlatService
	) {}

	ngOnInit(): void {}

	onSubmit(flat: Flat) {
		this.flatService.updateFlat(flat).then(() => {
			this.activeModal.close();
		});
	}
}
