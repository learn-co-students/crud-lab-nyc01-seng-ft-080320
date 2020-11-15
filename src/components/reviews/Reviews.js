import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  renderReviews = (revs) => revs.map(review => <Review key={review.id} deleteReview={this.props.deleteReview} review={review} />)
  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {this.renderReviews(filteredReviews)}
      </ul>
    );
  }
};

export default Reviews;