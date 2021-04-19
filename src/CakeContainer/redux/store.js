import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(logger)
    ));
// const store = createStore(rootReducer,applyMiddleware(logger))



export default store