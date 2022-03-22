import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	faPlusCircle,
	faPencilAlt,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlatModalComponent } from 'src/app/modal/flat-modal/flat-modal.component';
import { Flat } from 'src/app/models/flat.model';
import { FlatService } from 'src/app/services/flat.service';

@Component({
	selector: 'app-flat-list',
	templateUrl: './flat-list.component.html',
	styleUrls: ['./flat-list.component.css'],
})
export class FlatListComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;

	flats: Flat[] = [];

	constructor(
		private flatService: FlatService,
		private modal: NgbModal,
		private router: Router
	) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

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

	deleteFlat(flat: Flat) {
		if (confirm('Do you want to delete this flat?') == true) {
			this.flatService.deleteFlat(flat);
		}
	}

	openModal(flat: Flat) {
		const modalRef = this.modal.open(FlatModalComponent, {
			size: 'lg',
			centered: true,
		});

		modalRef.componentInstance.flat = flat;
	}
}
