import { Component, OnInit } from '@angular/core';
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
	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;

	flats: Flat[] = [];

	constructor(private flatService: FlatService, private modal: NgbModal) {}

	ngOnInit(): void {
		this.flatService.getFlats().subscribe((flat) => {
			this.flats = flat;
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
