import axios from "../helpers/axios";

export const sellerCheckout = form => {
    return async dispatch => {
        const res = await axios.post(`/payment/sellerCheckout`, form)
        console.log(res);
    }
}
