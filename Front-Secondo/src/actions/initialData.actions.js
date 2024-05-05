import axios from "../helpers/axios";
import { categoryConstants, productConstants } from "./constants"

export const getInitialData = () => {
    return async dispatch => {
        // dispatch({ type: initialDataConstants.GET_ALL_INITIAL_DATA_REQUEST });

        const res = await axios.post(`/initialdata`);
        if(res.status === 200){
            const { categories, productsSeller, productsBuyer, productsDonater, productsReciever } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { 
                    productsSeller,
                    productsBuyer,
                    productsDonater,
                    productsReciever
                }
            })
        }
        // console.log(res)
    }
}