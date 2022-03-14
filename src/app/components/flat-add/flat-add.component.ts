import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
	faLongArrowAltLeft,
	faCity,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FlatService } from 'src/app/services/flat.service';

@Component({
	selector: 'app-flat-add',
	templateUrl: './flat-add.component.html',
	styleUrls: ['./flat-add.component.css'],
})
export class FlatAddComponent implements OnInit {
	faArrowLeft = faLongArrowAltLeft;
	faCity = faCity;
	faUser = faUser;

	message!: string;

	buildingName!: string;
	buildingFloor!: number;
	flatNumber!: string;

	constructor(private flatService: FlatService) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		const newFlat = {
			buildingName: this.buildingName,
			buildingFloor: this.buildingFloor,
			flatNumber: this.flatNumber,
		};

		this.flatService.addFlat(newFlat).then(() => {
			form.reset();
			this.message = 'New flat added';
		});
	}
}
