import {
    DEPARTMENT_LOADING,
    GET_DEPARTMENT,
    ADD_DEPARTMENT,
    IS_ACTION_COMPLETE
} from '../constant'

const initialState = {
    departments: [],
    loading: false,
    isActionComplete: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case DEPARTMENT_LOADING:
            return {
                ...state,
                loading: true
            }
        case IS_ACTION_COMPLETE:
                return {
                    ...state,
                    isActionComplete: false
                }
        case GET_DEPARTMENT:
            return {
                ...state,
                departments: action.payload,
                loading: false,
                //isActionComplete: false
            }
        case ADD_DEPARTMENT:
            return {
                ...state,
                departments: [action.payload, ...state.departments],
                isActionComplete: true
            }
        default:
            return state
    }
}
