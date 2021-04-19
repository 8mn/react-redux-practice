import {combineReducers} from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import candyReducer from './candy/candyReducer'
import userReducer from './users/userReducer'


const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer,
    candy: candyReducer,
    user:userReducer
})


export default rootReducer