import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
 import { restaurantsListReducer } from './reducer/restaurantsReducer'

const reducers = combineReducers({
    restaurantReducer : restaurantsListReducer

})

const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store