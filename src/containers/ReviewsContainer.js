import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
    getReviews(){
        return this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)
    }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.getReviews()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews})


const mapDispatchToProps = dispatch => {
    return { 
        addReview: review => dispatch({ type: 'ADD_REVIEW', review}),
        deleteReview: id => dispatch({ type: 'DELETE_REVIEW', payload: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
