import { Injectable } from '@angular/core';
import { Renter } from '../models/renter.model';
import {
	Firestore,
	collection,
	collectionData,
	addDoc,
	doc,
	deleteDoc,
	docData,
	setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RenterService {
	renterCollectionRef = collection(this.firestore, 'renters');
	// @ts-ignore
	userId: string = JSON.parse(localStorage.getItem('userId'));
	constructor(private firestore: Firestore) {}

	getRenters() {
		return collectionData(this.renterCollectionRef, {
			idField: 'id',
		}) as Observable<Renter[]>;
	}

	getRenterById(id: string): Observable<Renter> {
		const renterDocRef = doc(this.firestore, `renters/${id}`);
		return docData(renterDocRef, { idField: 'id' }) as Observable<Renter>;
	}

	addRenter(renter: Renter) {
		return addDoc(this.renterCollectionRef, renter);
	}

	deleteRenters(renter: Renter) {
		const renterRef = doc(this.firestore, `renters/${renter.id}`);
		return deleteDoc(renterRef);
	}

	updateRenter(renter: Renter) {
		const renterDocRef = doc(this.firestore, `renters/${renter.id}`);
		return setDoc(renterDocRef, renter);
	}
}
