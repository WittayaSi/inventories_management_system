import {
    CATEGORY_LOADING,
    GET_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../constant'

const initialState = {
    categories: [],
    loading: false,
    isActionComplete: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        default:
            return state
    }
}