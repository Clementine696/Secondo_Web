import { productConstants } from "../actions/constants";

const initialState = {
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: []
    },
    productsSeller: [],
    productsBuyer: [],
    productsDonater: [],
    productsReciever: [],
    error: null,
    loading: false,
    productDetails: {},
    searchProductSeller: [],
    searchProductBuyer: [],
    searchProductDonater: [],
    searchProductRequest: [],
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
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDetails: action.payload.productDetails
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case productConstants.GET_SEARCH_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.GET_SEARCH_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                searchProductSeller: action.payload.productsSeller,
                searchProductBuyer: action.payload.productsBuyer,
                searchProductDonater: action.payload.productsDonater,
                searchProductRequest: action.payload.productsReciever,
            }
            break;
        case productConstants.GET_SEARCH_PRODUCT_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;
    }

    return state
}