import { authConstants } from "./constants"
import axios from "../helpers/axios"

export const login = (user) => {
    // console.log(user)

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/admin/signin`, {
            ...user
        }) //เหมือนไม่ส่งมา
        // console.log("Fail0");
        // console.log(res);
        // console.log(res.status);
        // console.log("Fail1");

        if(res.status && res.status === 200){
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
            // return "Tee";
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: res.data.error }
            });
        }
        // }else if(res.status == undefined){
        //     console.log("Yes");
        //     dispatch({
        //         type: authConstants.LOGIN_FAILURE,
        //         payload: { error: res.data.error }
        //     });
        //     // if(res.status === 400){
        //     //     dispatch({
        //     //         type: authConstants.LOGIN_FAILURE,
        //     //         payload: { error: res.data.error }
        //     //     });
        //     //     // return "Too";
        //     // }
        //     // else{
        //     //     dispatch({
        //     //         type: authConstants.LOGIN_FAILURE,
        //     //         payload: { error: res.data.error }
        //     //     });
        //     // }
            
        //     // return "Too";
        // }

        // dispatch({
        //     type: authConstants.LOGIN_REQUEST,
        //     payload: {
        //         ...user
        //     }
        // })
    }
}


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
        // if(token){
        //     dispatch({
        //         payload: {
        //             token
        //         }
        //     });
        // }else{
        //     dispatch({
        //         payload: {
        //             authenticate: false,
        //             message: 'User needs to login'
        //         }
        //     });
        // }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({ type: authConstants.LOGOUT_REQUEST })
        localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS })


        // const res = await axios.post(`/admin/signout`);

        // if(res.status === 200){
        //     localStorage.clear();
        //     dispatch({
        //         type: authConstants.LOGOUT_SUCCESS
        //     })
        // }else{
        //     dispatch({
        //         type: authConstants.LOGOUT_FAILURE,
        //         payload: { error: res.data.error }
        //     })
        // }

    }
}