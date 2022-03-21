import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faLongArrowAltLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { Renter } from 'src/app/models/renter.model';
import { BillService } from 'src/app/services/bill.service';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-bill-pay',
	templateUrl: './bill-pay.component.html',
	styleUrls: ['./bill-pay.component.css'],
})
export class BillPayComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));

	faArrowLeft = faLongArrowAltLeft;
	faUser = faUser;

	message!: string;

	renterName!: string;
	billType!: string;
	amount!: number;

	renters: Renter[] = [];

	constructor(
		private billService: BillService,
		private renterService: RenterService,
		private router: Router
	) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

		this.renterService.getRenters().subscribe((res) => {
			this.renters = res;
		});
	}

	onSubmit(form: NgForm) {
		const newBill = {
			userId: localStorage.getItem('userId'),
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
