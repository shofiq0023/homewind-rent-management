export interface Bill {
	id?: string;
	userId: string | null;
	renterName: string;
	billType: string;
	amount: number;
}
