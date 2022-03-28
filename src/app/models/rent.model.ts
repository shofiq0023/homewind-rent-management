import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface Rent {
	id?: string;
	userId: string;
	renterId: string;
	renterName: string;
	rentAmount: number;
	rentMonth: string;
	rentType: string;
	electricBill: number;
	gasBill: number;
	waterBill: number;
	paymentDate: string;
}
