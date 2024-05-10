import axios from "../helpers/axios"

// export const addProduct = form => {
//     return async dispatch => {
//         const res = await axios.post(`product/create`, form)
//         console.log(res);
//     }
// }

export const approveProduct = form => {
    return async dispatch => {
        const res = await axios.post(`product/approve`, form)
        console.log(res);
    }
}