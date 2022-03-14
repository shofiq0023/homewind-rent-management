import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faLongArrowAltLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { BillService } from 'src/app/services/bill.service';

@Component({
	selector: 'app-bill-pay',
	templateUrl: './bill-pay.component.html',
	styleUrls: ['./bill-pay.component.css'],
})
export class BillPayComponent implements OnInit {
	faArrowLeft = faLongArrowAltLeft;
	faUser = faUser;

	message!: string;

	renterName!: string;
	billType!: string;
	amount!: number;

	constructor(private billService: BillService) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		const newBill = {
			renterName: this.renterName,
			billType: this.billType,
			amount: this.amount,
		};
		this.billService.payBill(newBill).then(() => {
			form.reset();
			this.message = 'Bill pay info added';
		});
	}
}
