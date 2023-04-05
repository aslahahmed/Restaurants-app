import { RESTAURANT_LIST_FAIL, RESTAURANT_LIST_SUCCESS } from '../constants/restaurantContants'

export const restaurantsListReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {
        case RESTAURANT_LIST_SUCCESS:
            return { restaurants: action.payload }
        case RESTAURANT_LIST_FAIL:
            return { restaurants: action.error }
        default : 
            return state    
    }
}