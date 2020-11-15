import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    console.log(restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={(e)=>this.props.deleteRestaurant(restaurant)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default (Restaurant);
