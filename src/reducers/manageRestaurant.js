import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [], reviews: [] },
    action) {
        switch (action.type){
            case "ADD_RESTAURANT":
                let restaurant = {
                    id: cuid(),
                    text: action.restaurant
                }
                
                return { ...state, restaurants: state.restaurants.concat(restaurant) };
            case "DELETE_RESTAURANT":
                let lessArray = state.restaurants.filter(restaurant => restaurant.id !== action.id)
                console.log(action)
                return {...state, restaurants: lessArray}

            case "ADD_REVIEW":
                const review = {
                    id: cuid(),
                    text: action.review.text
                }
                return {...state, reviews: state.reviews.concat(review)}

            case "DELETE_REVIEW": 
                let reviews = state.reviews.filter(review => review.id !== action.id)
                return {...state, reviews}
            default:
                return state
        }
        return state

}
