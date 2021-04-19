import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(logger,thunk)
    ));
// const store = createStore(rootReducer,applyMiddleware(logger))



export default store