import { authConstants, userConstants } from "./constants"
import axios from "../helpers/axios"

export const signup = (user) => {
    console.log(user)

    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/admin/signup`, {
            ...user
        })

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });

            //ADD
            //////////////////////////////
            // dispatch({ type: authConstants.LOGIN_REQUEST });
            // const login_user = {email: user.email, 
            //                     password: user.password}
            // const login_res = await axios.post(`/admin/signin`, {
            //     login_user
            // })

            // if(login_res.status === 200){
            //     const { token, user } = login_res.data;
            //     localStorage.setItem('token', token);
            //     localStorage.setItem('user', JSON.stringify(user));
            //     dispatch({
            //         type: authConstants.LOGIN_SUCCESS,
            //         payload: {
            //             token, user
            //         }
            //     });
            // }else{
            //     if(login_res.status === 400){
            //         dispatch({
            //             type: authConstants.LOGIN_FAILURE,
            //             payload: { error: res.data.error }
            //         });
            //     }
            // }
            //////////////////////////////

        }else{
            if(res.status === 400){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}

export const updateProfilePicture = form => {
    return async dispatch => {

        dispatch({ type: authConstants.USER_UPDATE_PROFILE_PICTURE_REQUEST });

        const res = await axios.post(`admin/updateProfilePicture`, form)
        console.log(res);
        if(res.status === 200){
            dispatch({
                type: authConstants.USER_UPDATE_PROFILE_PICTURE_SUCCESS,
                // payload: {
                //     user : {
                //         profilePicture: res.data.profilePicture
                //     }
                // }
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: authConstants.USER_UPDATE_PROFILE_PICTURE_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}

export const getAddress = () => {
    return async dispatch => {

        dispatch({ type: userConstants.USER_GET_ADDRESS_REQUEST });
        const res = await axios.post(`admin/address/get`)
        if(res.status === 201){
            dispatch({ 
                type: userConstants.USER_GET_ADDRESS_SUCCESS,
                payload: {
                    addresses: res.data
                }
            });
        }
        else{
            if(res.status === 400){
                dispatch({ 
                    type: userConstants.USER_GET_ADDRESS_FAILURE,
                    payload: { error: res.data.error }
                });        
            }
        }
        // console.log(res.data);
    }
}

export const addAddress = () => {
    return async dispatch => {
        // const res = await axios.post(`admin/address/new`, form)
        // console.log(res);
        console.log('here be addAdress');
    }
}





// router.post('/:id/checkoutconfirm', middleware.isLoggedIn, function(req, res){
// 	User.findById(req.params.id, function(err, foundUser){
// 		if(err){
// 			req.flash('error', 'There is something wrong');
// 			return res.redirect('/');
// 		}else{
// 			Address.findById(req.body.select_deli, function(err, foundAddress){
// 				if(err){
// 					req.flash('error', 'There is something wrong');
// 					return res.redirect('/');
// 				}else{
// 					Payment.findById(req.body.select_paym, function(err, foundPayment){
// 						if(err){
// 							req.flash('error', 'There is something wrong');
// 							return res.redirect('/');
// 						}else{
// 							foundUser.carts.forEach(function(cart){
// 								User.findByIdAndUpdate(
// 									foundUser,
// 									{$push: {"historys": {product: cart.product, quantity: cart.quantity, address: foundAddress, payment: foundPayment, pay_date: Date()}}},
// 									{safe: true, upsert: true},
// 									function(err, model) {
// 										console.log(err);
// 									}
// 								);

// 								User.findByIdAndUpdate(
// 									foundUser,
// 									{$pull: {"carts": {_id:cart._id, product: cart.product, quantity: cart.quantity}}},
// 									{safe: true, upsert: true},
// 									function(err, model) {
// 										console.log(err);
// 									}
// 								);

// 							});
// 						}
// 					})
// 				}
// 			});
// 			res.redirect('/user/' + foundUser._id +"/history");
// 		}
// 	});
// });


// router.get('/:id/history', middleware.isLoggedIn, function(req, res){
// 	User.findById(req.params.id).populate('addresses payments').exec(function(err, foundUser){
// 		if(err){
// 			req.flash('error', 'There is something wrong');
// 			return res.redirect('/');
// 		}else{
// 			Product.find({}, function(err, allProducts){
// 				if(err){
// 					console.log(err);
// 				} else{
// 					res.render('user/history.ejs', {user: foundUser, products: allProducts});
// 				}
// 			});
// 		}
// 	});
// });