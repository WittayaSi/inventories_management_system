import axios from 'axios'
import {
    OFFICE_LOADING,
    GET_OFFICE,
    UPDATE_OFFICE,
    SET_UPDATED,
    SET_BUTTON_DISABLED
} from '../constant'

import { setError, clearError } from './errorAction'

export const setOfficeLoading = () => {
    return {
        type: OFFICE_LOADING
    }
}

export const setUpdated = () => {
    return {
        type: SET_UPDATED
    }
}

export const setButtonDisabled = () => {
    return {
        type: SET_BUTTON_DISABLED
    }
}

export const getOffice = () => dispatch => {
    dispatch(setOfficeLoading())
    axios
        .get('/api/offices')
        .then(res => {
            dispatch({
                type: GET_OFFICE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(
                setError(
                    err.response.data,
                    err.response.status
                )
            )
        })
}

export const updateOffice = (office = null) => dispatch => {
    console.log(office)
    axios
        .patch(`/api/offices`, office)
        .then( res => {
            dispatch(getOffice())
            dispatch({
                type: UPDATE_OFFICE
            })
            setTimeout(()=>{
                dispatch(setUpdated())
            }, 5000)
        })
        .catch( err => {
            setTimeout(()=>{
                dispatch(clearError())
            }, 3000)
            dispatch(setError(
                err.response.data,
                err.response.status,
                'UPDATE_OFFICE'
            ))
        })
}