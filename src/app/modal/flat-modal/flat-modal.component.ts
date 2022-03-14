import { Component, OnInit, Input } from '@angular/core';
import { Flat } from 'src/app/models/flat.model';

@Component({
	selector: 'app-flat-modal',
	templateUrl: './flat-modal.component.html',
	styleUrls: ['./flat-modal.component.css'],
})
export class FlatModalComponent implements OnInit {
	@Input() flat!: Flat;

	constructor() {}

	ngOnInit(): void {}
}
