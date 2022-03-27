import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingAddComponent } from './components/building-add/building-add.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RentPayComponent } from './components/rent-pay/rent-pay.component';
import { RenterAddComponent } from './components/renter-add/renter-add.component';
import { RenterListComponent } from './components/renter-list/renter-list.component';
import { ReportComponent } from './components/report/report.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'renter-list', component: RenterListComponent },
	{ path: 'renter-add', component: RenterAddComponent },
	{ path: 'building-list', component: BuildingListComponent },
	{ path: 'building-add', component: BuildingAddComponent },
	{ path: 'flat-list', component: FlatListComponent },
	{ path: 'flat-add', component: FlatAddComponent },
	{ path: 'rent-pay', component: RentPayComponent },
	{ path: 'report', component: ReportComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
