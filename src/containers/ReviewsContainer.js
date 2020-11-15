import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} />
        <Reviews />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: "ADD_REVIEW", review }),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
