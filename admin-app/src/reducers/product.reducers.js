import { productConstants } from "../actions/constants";

const initialState = {
    productsSeller: [],
    productsBuyer: [],
    productsDonater: [],
    productsReciever: [],
};

export default (state = initialState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                productsSeller: action.payload.productsSeller,
                productsBuyer: action.payload.productsBuyer,
                productsDonater: action.payload.productsDonater,
                productsReciever: action.payload.productsReciever,
            }
            break;
    }

    return state
}