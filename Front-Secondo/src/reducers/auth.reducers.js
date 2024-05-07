import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
        profilePicture: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {
    console.log(action);

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                error: null,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                error: null,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case authConstants.USER_UPDATE_PROFILE_PICTURE_REQUEST:
            state = {
                ...state,
            }
            break;
        case authConstants.USER_UPDATE_PROFILE_PICTURE_SUCCESS:
            state = {
                ...state,
                // user : {
                //     profilePicture: action.payload.profilePicture
                // }
            }
            break;
        case authConstants.USER_UPDATE_PROFILE_PICTURE_FAILURE:
            state = {
                ...state,
            }
            break;
    }

    return state;
}