import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
	faArrowLeft,
	faArrowRight,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { Rent } from 'src/app/models/rent.model';
import { Renter } from 'src/app/models/renter.model';
import { RentService } from 'src/app/services/rent.service';
import { RenterService } from 'src/app/services/renter.service';

@Component({
	selector: 'app-report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	faArrowLeft = faArrowLeft;
	faTrash = faTrash;

	renterName!: string;

	rents: Rent[] = [];
	originalRents: Rent[] = [];
	renters: Renter[] = [];

	constructor(
		private rentService: RentService,
		private renterService: RenterService
	) {}

	ngOnInit(): void {
		this.rentService.getRents().subscribe((res) => {
			var i = 0;
			var newRent: Rent[] = [];
			res.forEach((data) => {
				if (data.userId == this.userId) {
					newRent.push(res[i]);
				}
				i++;
			});

			this.sortByMonth(newRent);
			this.originalRents = newRent;
		});

		this.renterService.getRenters().subscribe((res) => {
			var i = 0;
			var newRenter: Renter[] = [];
			res.forEach((r) => {
				if (r.userId == this.userId) {
					newRenter.push(res[i]);
				}
				i++;
			});

			this.renters = newRenter;
		});
	}

	onSubmit(form: NgForm) {
		console.log('works');
	}

	deleteReport(rent: Rent) {
		if (confirm('Do you want to delete this?') == true) {
			this.rentService.deleteRent(rent);
		}
	}

	getReport(renterName: string) {
		this.rents = this.originalRents.filter(
			(r) => r.renterName == renterName
		);
	}

	sortByMonth(arr: Rent[]) {
		var months: string[] = [
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
		arr.sort((a, b) => {
			return months.indexOf(a.rentMonth) - months.indexOf(b.rentMonth);
		});
	}
}
