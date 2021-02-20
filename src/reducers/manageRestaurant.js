import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [] }, action) {
    switch (action.type){
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.payload,
                id: cuid()
            }

            return { ...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter(rest => rest.id !== action.payload)}
        
        default: 
            return state
    }
}
