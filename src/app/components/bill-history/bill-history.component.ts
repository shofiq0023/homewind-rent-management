import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	faPlusCircle,
	faPencilAlt,
	faTrash,
	faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { Bill } from 'src/app/models/bill.model';
import { BillService } from 'src/app/services/bill.service';

@Component({
	selector: 'app-bill-history',
	templateUrl: './bill-history.component.html',
	styleUrls: ['./bill-history.component.css'],
})
export class BillHistoryComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));

	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;
	faUser = faUserFriends;

	bills: Bill[] = [];

	constructor(private billService: BillService, private router: Router) {}

	ngOnInit(): void {
		//@ts-ignore
		if (JSON.parse(localStorage.getItem('loggedIn')) == false) {
			this.router.navigateByUrl('/login');
		}

		this.billService.getBills().subscribe((bill) => {
			var i = 0;
			bill.forEach((res) => {
				if (res.userId == this.userId) {
					this.bills.push(bill[i]);
				}
				i++;
			});
		});
	}

	deleteBill(bill: Bill) {
		if (confirm('Do you want to delete this bill history?') == true) {
			this.billService.deleteBills(bill);
		}
	}
}
