export interface Bill {
	id?: string;
	userId: string | null;
	renterId: string;
	renterName: string;
	billType: string;
	amount: number;
}
