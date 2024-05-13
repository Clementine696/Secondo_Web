import axios from "../helpers/axios"
import { productConstants } from "./constants";

export const addSellerProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/seller/create`, form)
        console.log(res);
    }
}

export const addBuyerProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/buyer/create`, form)
        console.log(res);
    }
}

export const addDonaterProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/donater/create`, form)
        console.log(res);
    }
}

export const addReceiverProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/reciever/create`, form)
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

export const getBuyerProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            console.log(productId)
            res = await axios.get(`/product/buyer/${productId}`);
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

export const getDonaterProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            console.log(productId)
            res = await axios.get(`/product/donater/${productId}`);
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

export const getReceiverProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            console.log(productId)
            res = await axios.get(`/product/reciever/${productId}`);
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

export const searchProductsByKeyword = (payload) => {
    return async dispatch => {
        console.log('Searching')
        dispatch({ type: productConstants.GET_SEARCH_PRODUCT_REQUEST });
        let res;
        try {
            const { keyword } = payload.params;
            console.log(keyword)
            res = await axios.post(`/product/s/${keyword}`);
            console.log(res);
            const { productsSeller, productsBuyer, productsDonater, productsReciever } = res.data;
            dispatch({
                type: productConstants.GET_SEARCH_PRODUCT_SUCCESS,
                payload: { 
                    productsSeller,
                    productsBuyer,
                    productsDonater,
                    productsReciever
                 }
            });
        } catch(error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_SEARCH_PRODUCT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}