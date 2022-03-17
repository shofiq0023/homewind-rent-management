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
	getDocs,
	where,
	query,
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

	async getFlatByFloor(floor: number) {
		let newFlats: string[] = [];
		const querySnapshot = await getDocs(
			query(this.flatCollectionRef, where('buildingFloor', '==', floor))
		);

		querySnapshot.forEach((doc) => {
			newFlats.push(doc.data()['flatNumber']);
		});

		return newFlats;
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
