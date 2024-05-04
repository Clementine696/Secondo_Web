import axios from "../helpers/axios"
import { productConstants } from "./constants";

export const addSellerProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/seller/create`, form)
        console.log(res);
    }
}

export const getSellerProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            console.log(productId)
            res = await axios.get(`/product/seller/${productId}`);
            console.log(res);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });
        } catch(error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}