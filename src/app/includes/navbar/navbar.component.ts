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
import { Auth, signOut } from '@angular/fire/auth';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	// @ts-ignore
	isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));

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

	constructor(public myRoute: Router, private auth: Auth) {}

	ngOnInit(): void {}

	title(): string {
		return this.myRoute.url;
	}

	logout() {
		if (confirm('Do you want to sign out?') == true) {
			localStorage.setItem('loggedIn', JSON.stringify(false));
			localStorage.setItem('userId', JSON.stringify(''));
			this.myRoute.navigate(['login']);
			signOut(this.auth);
		}
	}
}
