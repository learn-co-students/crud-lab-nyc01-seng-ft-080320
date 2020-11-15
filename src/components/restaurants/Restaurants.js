import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <li><Restaurant restaurant={restaurant} key={restaurant.id} /> </li>)
  }
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;