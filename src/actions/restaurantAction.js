import { type } from '@testing-library/user-event/dist/type'
import { RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from '../constants/restaurantContants'

import axios from 'axios'

export const listRestaurants = () => async (dispatch) => {
    const { data } = await axios.get('restaurants.json')

    try {
        dispatch({ type: RESTAURANT_LIST_SUCCESS, payload: data.restaurants })
    } catch (error) {
        dispatch({ type: RESTAURANT_LIST_FAIL, error: error })
    }
}