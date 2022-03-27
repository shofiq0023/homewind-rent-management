import { Injectable } from '@angular/core';
import { Rent } from '../models/rent.model';
import {
	Firestore,
	collection,
	collectionData,
	addDoc,
	doc,
	deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RentService {
	rentCollectionRef = collection(this.firestore, 'rents');

	constructor(private firestore: Firestore) {}

	getRents(): Observable<Rent[]> {
		return collectionData(this.rentCollectionRef, {
			idField: 'id',
		}) as Observable<Rent[]>;
	}

	addRent(rent: Rent) {
		return addDoc(this.rentCollectionRef, rent);
	}

	deleteRent(rent: Rent) {
		const rentRef = doc(this.firestore, `rents/${rent.id}`);
		return deleteDoc(rentRef);
	}
}
