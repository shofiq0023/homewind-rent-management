import { Component, OnInit, Input } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Rent } from 'src/app/models/rent.model';
import { Renter } from 'src/app/models/renter.model';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-rent-invoice',
	templateUrl: './rent-invoice.component.html',
	styleUrls: ['./rent-invoice.component.css'],
})
export class RentInvoiceComponent implements OnInit {
	company: string = 'The Homewind';
	@Input() rents: Rent[] = [];
	faPrint = faPrint;

	rentSum: number = 0;

	renter?: Renter;

	constructor(private renterService: RenterService) {}

	ngOnInit(): void {
		// @ts-ignore
		this.company = JSON.parse(localStorage.getItem('company'));

		this.rents.forEach((data) => {
			this.rentSum +=
				data.rentAmount +
				data.gasBill +
				data.electricBill +
				data.waterBill;
		});
		this.renterService
			.getRenterById(this.rents[0].renterId)
			.subscribe((res) => {
				this.renter = res;
			});
	}
}
