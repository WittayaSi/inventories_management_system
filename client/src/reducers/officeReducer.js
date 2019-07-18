import {
    OFFICE_LOADING,
    GET_OFFICE,
    UPDATE_OFFICE,
    SET_UPDATED,
    SET_BUTTON_DISABLED
} from '../constant'

const initialState = {
    office:[],
    loading: false,
    updated: false,
    button_disabled: true
}

export default function(state=initialState, action){
    switch(action.type) {
        case OFFICE_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_OFFICE:
            return {
                ...state,
                office: action.payload,
                loading: false,
            }
        case UPDATE_OFFICE:
            return {
                ...state,
                updated: true,
                button_disabled: true
            }
        case SET_UPDATED:
            return {
                ...state,
                updated: false
            }
        case SET_BUTTON_DISABLED:
            return {
                ...state,
                button_disabled: false
            }
        default: 
            return state
    }
}