import { Component, OnInit } from '@angular/core';
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
	faPlus = faPlusCircle;
	faPencil = faPencilAlt;
	faTrash = faTrash;
	faUser = faUserFriends;

	bills: Bill[] = [];

	constructor(private billService: BillService) {}

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
