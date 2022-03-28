import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import {
	faPlusCircle,
	faPencilAlt,
	faTrash,
	faFileInvoiceDollar,
	faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Renter } from 'src/app/models/renter.model';
import { RenterService } from 'src/app/services/renter.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RenterModalComponent } from 'src/app/modal/renter-modal/renter-modal.component';
import { Router } from '@angular/router';
import { RenterDetailModalComponent } from 'src/app/modal/renter-detail-modal/renter-detail-modal.component';

@Component({
	selector: 'app-renter-list',
	templateUrl: './renter-list.component.html',
	styleUrls: ['./renter-list.component.css'],
})
export class RenterListComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;
	faInvoice = faFileInvoiceDollar;
	faView = faEye;

	renters: Renter[] = [];
	message: string = '';

	constructor(
		private renterService: RenterService,
		private modal: NgbModal,
		private router: Router
	) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

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

	openDetail(renter: Renter) {
		const modalRef = this.modal.open(RenterDetailModalComponent, {
			size: 'lg',
			centered: true,
		});

		modalRef.componentInstance.renter = renter;
	}
}
