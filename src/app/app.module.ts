// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPrintModule } from 'ngx-print';

// Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { RenterListComponent } from './components/renter-list/renter-list.component';
import { RenterAddComponent } from './components/renter-add/renter-add.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { BuildingAddComponent } from './components/building-add/building-add.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { RenterModalComponent } from './modal/renter-modal/renter-modal.component';
import { BuildingModalComponent } from './modal/building-modal/building-modal.component';
import { FlatModalComponent } from './modal/flat-modal/flat-modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RentPayComponent } from './components/rent-pay/rent-pay.component';
import { ReportComponent } from './components/report/report.component';
import { RenterDetailModalComponent } from './modal/renter-detail-modal/renter-detail-modal.component';
import { RentInvoiceComponent } from './invoice/rent-invoice/rent-invoice.component';
import { RentInvoiceSingleComponent } from './invoice/rent-invoice-single/rent-invoice-single.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		RenterListComponent,
		RenterAddComponent,
		BuildingListComponent,
		BuildingAddComponent,
		FlatListComponent,
		FlatAddComponent,
		RenterModalComponent,
		BuildingModalComponent,
		FlatModalComponent,
		LoginComponent,
		SignupComponent,
		RentPayComponent,
		ReportComponent,
		RenterDetailModalComponent,
		RentInvoiceComponent,
  RentInvoiceSingleComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		NgxPrintModule,
		FontAwesomeModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		FormsModule,
		provideAuth(() => getAuth()),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
