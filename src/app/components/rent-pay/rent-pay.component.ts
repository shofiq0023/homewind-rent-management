import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
	faArrowRight,
	faBolt,
	faFire,
	faTint,
} from '@fortawesome/free-solid-svg-icons';
import { Timestamp } from 'firebase/firestore';
import { Renter } from 'src/app/models/renter.model';
import { RentService } from 'src/app/services/rent.service';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-rent-pay',
	templateUrl: './rent-pay.component.html',
	styleUrls: ['./rent-pay.component.css'],
})
export class RentPayComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));
	faArrowRight = faArrowRight;
	faElectric = faBolt;
	faGas = faFire;
	faWater = faTint;

	message!: string;

	renters: Renter[] = [];
	months: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Augast',
		'September',
		'November',
		'December',
	];

	renterId!: string;
	renterName!: string;
	rentAmount!: number;
	rentMonth!: string;
	rentType!: string;
	electricBill!: number;
	gasBill!: number;
	waterBill!: number;

	constructor(
		private router: Router,
		private renterService: RenterService,
		private rentService: RentService
	) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

		this.renterService.getRenters().subscribe((res) => {
			var newRenters: Renter[] = [];
			var i = 0;
			res.forEach((data) => {
				if (data.userId == this.userId) {
					newRenters.push(res[i]);
				}
				i++;
			});

			this.renters = newRenters;
		});
	}

	onSubmit(form: NgForm) {
		const newRent = {
			userId: this.userId,
			renterId: this.renterId,
			renterName: this.renterName,
			rentAmount: this.rentAmount,
			rentMonth: this.rentMonth,
			rentType: this.rentType,
			electricBill: this.electricBill,
			gasBill: this.gasBill,
			waterBill: this.waterBill,
			paymentDate: new Date().toString(),
		};

		this.rentService.addRent(newRent).then(() => {
			form.reset();
			this.message = 'Rent information added';
		});
	}

	setRenterName(renterId: string) {
		this.renters.forEach((r) => {
			if (r.id == renterId) {
				this.renterName = r.fullName;
			}
		});
	}
}
