import axios from "../helpers/axios";

export const sellerCheckout = form => {
    return async dispatch => {
        const res = await axios.post(`/payment/sellerCheckout`, form)
        console.log(res);
    }
}

export const payCarbonCredits = form => {
    return async dispatch => {
        const res = await axios.post(`/payment/payCarbonCredits`, form)
        console.log(res);
    }
}

export const buyerCheckout = form => {
    return async dispatch => {
        const res = await axios.post(`/payment/buyerCheckout`, form)
        console.log(res);
    }
}