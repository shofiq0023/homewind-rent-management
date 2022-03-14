import { Injectable } from '@angular/core';
import { Bill } from '../models/bill.model';
import {
	Firestore,
	collection,
	collectionData,
	addDoc,
	doc,
	deleteDoc,
	setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BillService {
	billCollectionRef = collection(this.firestore, 'bills');

	constructor(private firestore: Firestore) {}

	payBill(bill: Bill) {
		return addDoc(this.billCollectionRef, bill);
	}

	getBills(): Observable<Bill[]> {
		return collectionData(this.billCollectionRef, {
			idField: 'id',
		}) as Observable<Bill[]>;
	}

	deleteBills(bill: Bill) {
		const billDocRef = doc(this.firestore, `bills/${bill.id}`);
		return deleteDoc(billDocRef);
	}
}
