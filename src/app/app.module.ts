// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { RecieptComponent } from './components/reciept/reciept.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { BillPayComponent } from './components/bill-pay/bill-pay.component';
import { RenterModalComponent } from './modal/renter-modal/renter-modal.component';
import { BuildingModalComponent } from './modal/building-modal/building-modal.component';
import { FlatModalComponent } from './modal/flat-modal/flat-modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		RenterListComponent,
		RenterAddComponent,
		BuildingListComponent,
		BuildingAddComponent,
		RecieptComponent,
		FlatListComponent,
		FlatAddComponent,
		BillHistoryComponent,
		BillPayComponent,
		RenterModalComponent,
		BuildingModalComponent,
		FlatModalComponent,
		LoginComponent,
		SignupComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
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
