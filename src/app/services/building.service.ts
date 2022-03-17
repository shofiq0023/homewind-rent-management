import { Injectable } from '@angular/core';
import { Building } from '../models/building.model';
import {
	Firestore,
	collection,
	collectionData,
	addDoc,
	doc,
	deleteDoc,
	docData,
	setDoc,
	where,
	query,
	getDocs,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BuildingService {
	buildingCollectionRef = collection(this.firestore, 'buildings');

	constructor(private firestore: Firestore) {}

	getBuildings(): Observable<Building[]> {
		return collectionData(this.buildingCollectionRef, {
			idField: 'id',
		}) as Observable<Building[]>;
	}

	getBuildingById(buildingId: string): Observable<Building> {
		const buildingRef = doc(this.firestore, `buildings/${buildingId}`);
		return docData(buildingRef, { idField: 'id' }) as Observable<Building>;
	}

	async getFloor(buildingName: string) {
		let newFloor;
		const querySnapshot = await getDocs(
			query(this.buildingCollectionRef, where('name', '==', buildingName))
		);

		querySnapshot.forEach((doc) => {
			newFloor = doc.data()['floor'];
		});

		return newFloor;
	}

	addBuilding(building: Building) {
		return addDoc(this.buildingCollectionRef, building);
	}

	deleteBuilding(building: Building) {
		const buildingRef = doc(this.firestore, `buildings/${building.id}`);
		return deleteDoc(buildingRef);
	}

	updateBuilding(building: Building) {
		const buildingRef = doc(this.firestore, `buildings/${building.id}`);
		return setDoc(buildingRef, building);
	}
}
