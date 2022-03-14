import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { BillPayComponent } from './components/bill-pay/bill-pay.component';
import { BuildingAddComponent } from './components/building-add/building-add.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { HomeComponent } from './components/home/home.component';
import { RecieptComponent } from './components/reciept/reciept.component';
import { RenterAddComponent } from './components/renter-add/renter-add.component';
import { RenterListComponent } from './components/renter-list/renter-list.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'renter-list', component: RenterListComponent },
	{ path: 'renter-add', component: RenterAddComponent },
	{ path: 'building-list', component: BuildingListComponent },
	{ path: 'building-add', component: BuildingAddComponent },
	{ path: 'flat-list', component: FlatListComponent },
	{ path: 'flat-add', component: FlatAddComponent },
	{ path: 'bill-history', component: BillHistoryComponent },
	{ path: 'bill-pay', component: BillPayComponent },
	{ path: 'reciept', component: RecieptComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
