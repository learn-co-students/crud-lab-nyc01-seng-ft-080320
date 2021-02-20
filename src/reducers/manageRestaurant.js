import { combineReducers } from 'redux'
import cuid from 'cuid';

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews,
})

export default rootReducer;

function manageRestaurants(state = [], action) {
    switch (action.type){
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.payload,
                id: cuid()
            }

            return [...state, restaurant]

        case 'DELETE_RESTAURANT':
            return state.filter(rest => rest.id !== action.payload)
        
        default: 
            return state
    }
}

function manageReviews(state = [], action){
    switch (action.type){
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                ...action.review
            }
            return [...state, review]
        case 'DELETE_REVIEW':
            return state.filter(rev => rev.id !== action.payload)
        default:
            return state
    }
}