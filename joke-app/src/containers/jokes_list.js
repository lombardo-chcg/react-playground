import React, { Component } from 'react';
import { connect } from 'react-redux';

class JokesList extends Component {
  constructor(props) {
    super(props);

    this.renderJokes = this.renderJokes.bind(this);
  }

  renderJokes(jokeObject) {
    return(
      <li key={jokeObject.id} className="list-group-item">{jokeObject.joke}</li>)
  }

  render() {
    return(
      <ul className="list-group">
        {this.props.jokes.map(this.renderJokes)}
      </ul>
    )
  }
}

function mapStateToProps( {jokes} ) {
  return { jokes };
}

export default connect(mapStateToProps)(JokesList)
