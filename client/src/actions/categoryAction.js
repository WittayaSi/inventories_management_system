import {
    CATEGORY_LOADING,
    GET_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../constant'
import axios from 'axios'
import { get } from 'https';

export const setCategoryLoading = () => {
    return {
        type: CATEGORY_LOADING
    }
}

export const getCategory = () => dispatch => {
    dispatch(setCategoryLoading())
    axios
        .get('/api/categories')
        .then( res=> {
            dispatch({
                type: GET_CATEGORY,
                payload: res.data
            })
        })
}