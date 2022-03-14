import { Component, OnInit, Input } from '@angular/core';
import { Renter } from 'src/app/models/renter.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-renter-modal',
	templateUrl: './renter-modal.component.html',
	styleUrls: ['./renter-modal.component.css'],
})
export class RenterModalComponent implements OnInit {
	@Input() renter!: Renter;

	constructor(
		public activeModal: NgbActiveModal,
		private renterService: RenterService
	) {}

	ngOnInit(): void {}

	onSubmit() {
		this.renterService.updateRenter(this.renter).then(() => {
			this.activeModal.close();
		});
	}
}
