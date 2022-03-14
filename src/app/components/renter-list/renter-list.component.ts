import { Component, OnInit } from '@angular/core';
import {
	faPlusCircle,
	faPencilAlt,
	faTrash,
	faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Renter } from 'src/app/models/renter.model';
import { RenterService } from 'src/app/services/renter.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RenterModalComponent } from 'src/app/modal/renter-modal/renter-modal.component';

@Component({
	selector: 'app-renter-list',
	templateUrl: './renter-list.component.html',
	styleUrls: ['./renter-list.component.css'],
})
export class RenterListComponent implements OnInit {
	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;
	faInvoice = faFileInvoiceDollar;

	renters: Renter[] = [];

	constructor(
		private renterService: RenterService,
		private modal: NgbModal
	) {}

	ngOnInit(): void {
		this.renterService.getRenters().subscribe((renter) => {
			this.renters = renter;
			console.log(renter);
		});
	}

	deleteRenter(renter: Renter) {
		if (confirm('Are you sure you want to delete this record?') == true) {
			this.renterService.deleteRenters(renter);
		}
	}

	openModal(renter: Renter) {
		const modalRef = this.modal.open(RenterModalComponent, {
			size: 'lg',
			centered: true,
		});
		modalRef.componentInstance.renter = renter;
	}
}
