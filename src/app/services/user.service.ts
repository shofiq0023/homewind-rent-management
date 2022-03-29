import { Injectable } from '@angular/core';
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
import { CustomUser } from '../models/customUser.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	userCollectionRef = collection(this.firestore, 'users');

	constructor(private firestore: Firestore) {}

	getUsers() {
		return collectionData(this.userCollectionRef, {
			idField: 'id',
		}) as Observable<CustomUser[]>;
	}

	addUser(user: CustomUser) {
		return addDoc(this.userCollectionRef, user);
	}
}
