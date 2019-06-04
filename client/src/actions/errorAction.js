import {
    GET_ERROR,
    CLEAR_ERROR
} from '../constant'

// GET ERROR
export const setError = (message, status, id = null) => {
    return {
        type: GET_ERROR,
        payload: { message, status, id }
    }
}

// Clear Error
export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}