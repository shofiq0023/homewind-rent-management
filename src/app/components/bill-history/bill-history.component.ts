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

	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;
	faUser = faUserFriends;

	bills: Bill[] = [];

	constructor(private billService: BillService, private router: Router) {}

	ngOnInit(): void {
		this.billService.getBills().subscribe((bill) => {
			this.bills = bill;
		});
	}

	deleteBill(bill: Bill) {
		if (confirm('Do you want to delete this bill history?') == true) {
			this.billService.deleteBills(bill);
		}
	}
}
