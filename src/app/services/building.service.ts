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
