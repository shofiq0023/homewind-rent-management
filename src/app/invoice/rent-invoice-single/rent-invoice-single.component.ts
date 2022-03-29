import { Component, OnInit, Input } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Rent } from 'src/app/models/rent.model';
import { Renter } from 'src/app/models/renter.model';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-rent-invoice-single',
	templateUrl: './rent-invoice-single.component.html',
	styleUrls: ['./rent-invoice-single.component.css'],
})
export class RentInvoiceSingleComponent implements OnInit {
	company: string = 'The Homewind';
	@Input() rent!: Rent;

	faPrint = faPrint;

	renter?: Renter;

	constructor(private renterService: RenterService) {}

	ngOnInit(): void {
		// @ts-ignore
		this.company = JSON.parse(localStorage.getItem('company'));

		this.renterService
			.getRenterById(this.rent.renterId)
			.subscribe((res) => {
				this.renter = res;
			});
	}
}
