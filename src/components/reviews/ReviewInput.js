import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
state={
  text: ""
}
  handleChange =(e) =>{
    this.setState({text: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ""})
  }
  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        <input type="submit" />
       </form>
    );
  }
};

export default ReviewInput;
