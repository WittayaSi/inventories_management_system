import {
    ITEM_LOADING,
    GET_ITEM,
    ADD_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    IS_ACTION_COMPLETE
} from '../constant'

const initialState = {
    items: [],
    loading: false,
    isActionComplete: false
}

export default function(state=initialState, action){
    switch(action.type) {
        case ITEM_LOADING:
            return {
                ...state,
                loading: true
            }
        case IS_ACTION_COMPLETE:
                return {
                    ...state,
                    isActionComplete: false
                }
        case GET_ITEM:
            return {
                ...state,
                items: action.payload,
                loading: false,
                //isActionComplete: false
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
                isActionComplete: true
            }
        case UPDATE_ITEM:
            //const removed_item = state.items.filter( item => item._id !== action.payload.id)
            return {
                ...state,
                isActionComplete: true,
                //items: [...state.items]                
            }
        case DELETE_ITEM: 
            return {
                ...state,
                items: state.items.filter( item => item._id !== action.payload)
            }
        default: 
            return state
    }
}