import { Component, OnInit, Input } from '@angular/core';
import { Renter } from 'src/app/models/renter.model';

@Component({
	selector: 'app-renter-detail-modal',
	templateUrl: './renter-detail-modal.component.html',
	styleUrls: ['./renter-detail-modal.component.css'],
})
export class RenterDetailModalComponent implements OnInit {
	@Input() renter!: Renter;

	constructor() {}

	ngOnInit(): void {}
}
