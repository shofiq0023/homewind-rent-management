import { Component, OnInit } from '@angular/core';
import {
	faHome,
	faUser,
	faUserPlus,
	faUserFriends,
	faAngleDown,
	faBuilding,
	faCity,
	faHouseUser,
	faFileInvoiceDollar,
	faReceipt,
	faSignOutAlt,
	faHouseDamage,
	faMoneyCheck,
	faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	faHome = faHome;
	faUser = faUser;
	faUserPlus = faUserPlus;
	faUserFriends = faUserFriends;
	faAngleDown = faAngleDown;
	faBuilding = faBuilding;
	faCity = faCity;
	faHouseUser = faHouseUser;
	faInvoice = faFileInvoiceDollar;
	faReceipt = faReceipt;
	faSignOut = faSignOutAlt;
	faHouse = faHouseDamage;
	faMoneyCheck = faMoneyCheck;
	faMoney = faMoneyBill;

	public isRenterCollapsed = true;
	public isBuildingCollapsed = true;
	public isFlatCollapsed = true;
	public isBillCollapsed = true;

	constructor(public myRoute: Router) {}

	ngOnInit(): void {}

	title(): string {
		return this.myRoute.url;
	}
}
