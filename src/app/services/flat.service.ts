import { Injectable } from '@angular/core';
import { Flat } from '../models/flat.model';
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
export class FlatService {
	flatCollectionRef = collection(this.firestore, 'flats');

	constructor(private firestore: Firestore) {}

	getFlats(): Observable<Flat[]> {
		return collectionData(this.flatCollectionRef, {
			idField: 'id',
		}) as Observable<Flat[]>;
	}

	addFlat(flat: Flat) {
		return addDoc(this.flatCollectionRef, flat);
	}

	deleteFlat(flat: Flat) {
		const flatDocRef = doc(this.firestore, `flats/${flat.id}`);
		return deleteDoc(flatDocRef);
	}

	updateFlat(flat: Flat) {
		const flatDocRef = doc(this.firestore, `flats/${flat.id}`);
		return setDoc(flatDocRef, flat);
	}
}
