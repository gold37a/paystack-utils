import { PAYSTACK_SK_LIVE, PAYSTACK_SK_TEST } from "$env/static/private";
import { PUBLIC_PAYSTACK_TEST } from "$env/static/public";
import axios from "axios";

export const secret_key = PUBLIC_PAYSTACK_TEST ? PAYSTACK_SK_TEST : PAYSTACK_SK_LIVE

export const paystack = axios.create({
    baseURL: 'https://api.paystack.co',
    headers: {
        Authorization: `Bearer ${secret_key}`
    }
});

export { create_transfer_recipient } from './create_transfer_recipient.js';
export * from './currencies.js';
export { verify } from './verify.js';
export { get_banks } from './get_banks.js';
export { transfer } from './transfer.js';
export * as types from './types.js';