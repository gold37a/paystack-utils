import { paystack } from "./index.js"

export const verify = (reference: string): Promise<boolean> => {
    return paystack.get(`transaction/verify/${reference}`).then(({ data }) => {
        return data.data.status === 'success'
    })
}