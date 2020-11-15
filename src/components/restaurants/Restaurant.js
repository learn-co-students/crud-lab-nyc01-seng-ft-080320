import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import { connect } from 'react-redux'
class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        
          {restaurant.text}
          <button onClick={(e)=>this.props.deleteRestaurant(restaurant)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        
      </div>
    );
  }
};
const mapStateToProps = store => {
  return store
}
const mapDispatchToProps = dispatch => {
  return {deleteRestaurant: restaurant => dispatch({ type: "DELETE_RESTAURANT", restaurant }),}
}
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
