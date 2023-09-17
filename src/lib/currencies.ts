export const currencies: Array<{ name: string; value: Currency }> = [
	{ name: 'Nigerian Naira', value: 'NGN' },
	{ name: 'Ghana Cedi', value: 'GHS' },
	{ name: 'South African Rand', value: 'ZAR' },
	{ name: 'US Dollar', value: 'USD' }
];

export type Currency = 'NGN' | 'GHS' | 'ZAR' | 'USD';
