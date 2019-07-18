import axios from 'axios'
import {
    ITEM_LOADING,
    GET_ITEM,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    IS_ACTION_COMPLETE,
    CHANGE_ITEM_STATUS
} from '../constant'

import { setError } from './errorAction'
import { getCategory } from './categoryAction'

export const setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}

export const setIsActionComplete = () => dispatch => {
    dispatch({
        type: IS_ACTION_COMPLETE
    })
}

export const getItem = () => dispatch => {
    dispatch(setItemLoading())
    axios
        .get('/api/items')
        .then( res => {
            //console.log(res.data)
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

export const updateItem = (cid, iid, item = null) => dispatch => {
    //console.log(id, item)
    axios
        .patch(`/api/items/${cid}/${iid}`, item)
        .then( res => {
            //console.log(res.data)
            dispatch(getItem())
            dispatch(getCategory())
            dispatch({
                type: UPDATE_ITEM
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

export const deleteItem = (category_id, item_id) => dispatch => {
    // console.log(item_id, category_id)
    axios
        .delete(`/api/items/${category_id}/${item_id}`)
        .then( res => {
            dispatch(getItem())
            dispatch(getCategory())
            dispatch({
                type: DELETE_ITEM,
                payload: item_id
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