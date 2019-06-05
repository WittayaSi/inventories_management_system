import { combineReducers } from 'redux'

import itemReducer from './itemReducer'
import errorReducer from './errorReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
    item: itemReducer,
    category: categoryReducer,
    error: errorReducer
})