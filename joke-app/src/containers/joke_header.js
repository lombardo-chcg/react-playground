import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJoke } from '../actions/index'

class JokeHeader extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  handleButtonClick() {
    console.log(this.props.getJoke)
    this.props.getJoke()
  }

  render() {
    return(
      <div>
        <h1>You like jokes?</h1>
        <button onClick={this.handleButtonClick} type="button" className="btn btn-primary">Get New Joke</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJoke }, dispatch)
}

export default connect(null, mapDispatchToProps)(JokeHeader)
