import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantCard from './RestaurantCard'
import { listRestaurants } from '../actions/restaurantAction';

function Home() {

    const dispatch = useDispatch();

    const restaurantsData = useSelector(state => state.restaurantReducer)
    const { restaurants } = restaurantsData
    // const [hotels, setHotels] = useState([])

    // const fetchData = async() => {
    //     await fetch('/restaurants.json')
    //         .then((res) => res.json())
    //         .then((data) => setHotels(data.restaurants))
    // }

    useEffect(() => {
        dispatch(listRestaurants())
    }, [])

    console.log("My data is", restaurants)

    return (
        <Row>
            {restaurants.map((item) => (
                <Col sm={10} md={8} lg={6} xl={3}>
                    <RestaurantCard item={item} />
                </Col>
            ))}
        </Row>
    )
}


export default Home
