import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  renderCounter() {
    return this.props.counter.counter
  }

  render() {
    return (
      <div>
        {this.renderCounter()}
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
