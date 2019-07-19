import axios from 'axios'
import {
    DEPARTMENT_LOADING,
    IS_ACTION_COMPLETE, 
    ADD_DEPARTMENT,
    GET_DEPARTMENT
} from '../constant'

import { setError } from './errorAction'

export const setIsActionComplete = () => dispatch => {
    dispatch({
        type: IS_ACTION_COMPLETE
    })
}

export const setDepartmentLoading = () => {
    return {
        type: DEPARTMENT_LOADING
    }
}

export const getDepartments = () => dispatch => {
    dispatch(setDepartmentLoading())
    axios
        .get('/api/departments')
        .then( res => dispatch({
            type: GET_DEPARTMENT,
            payload: res.data
        }))
        .catch( err => dispatch(setError(
            err.response.data,
            err.response.status,
            'GET_DEPARTMENT'
        )))
}

export const addDepartment = (department) => dispatch => {
    console.log(department)
    axios
        .post('/api/departments', department)
        .then( res => {
            dispatch({
                type: ADD_DEPARTMENT,
                payload: res.data
            })
        })
        .catch( err => dispatch(setError(
            err.response.data,
            err.response.status,
            'ADD_DEPARTMENT'
        )))
}

