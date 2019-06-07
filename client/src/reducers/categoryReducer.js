import {
    CATEGORY_LOADING,
    GET_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    IS_ACTION_COMPLETE
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
        case IS_ACTION_COMPLETE:
            return {
                ...state,
                isActionComplete: false
            }
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                isActionComplete: true
            }
        default:
            return state
    }
}