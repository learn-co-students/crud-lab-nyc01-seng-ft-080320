import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [], reviews: [] },
    action) {
        switch (action.type){
            case "ADD_RESTAURANT":
                let restaurant = {
                    id: cuid(),
                    text: action.restaurant.text
                }
                
                return { restaurants: state.restaurants.concat(restaurant) };
            case "DELETE_RESTAURANT":
                let lessArray = state.restaurants.filter(restaurant => restaurant.id !== action.restaurant.id)
                console.log(action)
                return {...state, restaurants: lessArray}
            default:
                return state
        }
        return state

}
