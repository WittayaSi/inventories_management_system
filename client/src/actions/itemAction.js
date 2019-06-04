import axios from 'axios'
import {
    ITEM_LOADING,
    GET_ITEM,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    IS_ACTION_COMPLETE
} from '../constant'

import { setError } from './errorAction'

export const setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}

export const setIsActionComplete = () => {
    return {
        type: IS_ACTION_COMPLETE
    }
}

export const getItem = () => dispatch => {
    dispatch(setItemLoading())
    axios
        .get('/api/items')
        .then( res => {
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(setError(
                err.response.data,
                err.response.status
            ))
        })
}

export const addItem = (item) => dispatch => {
    axios
        .post('/api/items', item)
        .then( res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch(setError(
                err.response.data,
                err.response.status,
                'ADD_ITEM'
            ))
        })
}

export const updateItem = (id, item) => dispatch => {
    console.log(id, item)
    axios
        .put(`/api/item/${id}`, item)
        .then( res => {
            dispatch({
                type: UPDATE_ITEM,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch(setError(
                err.response.data,
                err.response.status,
                'UPDATE_ITEM'
            ))
        })
}

export const deleteItem = id => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then( res => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
        .catch( err => {
            dispatch(setError(
                err.response.data,
                err.response.status,
                'DELETE_ITEM'
            ))
        })
}