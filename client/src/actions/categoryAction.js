import {
    CATEGORY_LOADING,
    GET_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    IS_ACTION_COMPLETE,
    GET_ERROR
} from '../constant'
import axios from 'axios'
import { setError } from './errorAction'

export const setCategoryLoading = () => {
    return {
        type: CATEGORY_LOADING
    }
}

export const setIsActionComplete = () => {
    return {
        type : IS_ACTION_COMPLETE
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

export const addCategory = (cat) => dispatch =>{
    axios.post('/api/categories', {cat})
        .then( res => {
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            })
        })
        .catch( err => dispatch(setError(err.response.data,err.response.status,'ADD_CATEGORY')))
}

export const deleteCategory = (id) => dispatch => {
    axios
        .delete(`/api/categories/${id}`)
        .then( res => {
            dispatch({
                type: DELETE_CATEGORY,
                payload: id
            })
        })
        .catch( err => {
            dispatch(setError(
                err.response.data,
                err.response.status,
                'DELETE_CATEGORY'
            ))
        })
}