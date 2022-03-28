import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
	faArrowRight,
	faBolt,
	faCalendar,
	faFire,
	faTint,
} from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
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
	faCalender = faCalendar;

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
	rentMonth: string = this.months[new Date().getMonth()];
	rentType: string = 'Active month';
	electricBill!: number;
	gasBill!: number;
	waterBill!: number;
	paymentDate: NgbDateStruct = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		day: new Date().getDate(),
	};

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
			// paymentDate: 28 March, 2022
			paymentDate: `${this.paymentDate.day} ${
				this.months[this.paymentDate.month - 1]
			}, ${this.paymentDate.year}`,
		};

		this.rentService.addRent(newRent).then(() => {
			form.reset();
			this.message = 'Rent information added';
			setTimeout(() => (this.message = ''), 3000);
		});
	}

	setRenterName(renterId: string) {
		this.renters.forEach((r) => {
			if (r.id == renterId) {
				this.renterName = r.fullName;
			}
		});
	}

	resetDate() {
		this.paymentDate = {
			year: new Date().getFullYear(),
			month: new Date().getMonth() + 1,
			day: new Date().getDate(),
		};
	}
}
