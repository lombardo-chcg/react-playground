import React, { Component } from 'react';

export default class Joke extends Component {
  handleButtonClick() {
    console.log('hi')
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
