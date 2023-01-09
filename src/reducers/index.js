import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import jeweleryReducer from './jeweleryReducer'
import productsReducer from './productsReducer'
import menReducer from './menReducer'
import womenReducer from './womenReducer'
import technologyReducer from './technologyReducer'
import cartReducer from './cartReducer'
import emailReducer from './emailReducer'

const rootReducer = combineReducers({
    users:usersReducer,
    jewelery: jeweleryReducer,
    products: productsReducer,
    men: menReducer,
    women: womenReducer,
    technology: technologyReducer,
    cart: cartReducer,
    email: emailReducer
})

export default rootReducer