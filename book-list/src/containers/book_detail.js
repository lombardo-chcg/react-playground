import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <h3>select a book to begin</h3>
    }

    return (
      <div>
        <h3> book details </h3>
        <div>
          Title: {this.props.book.title}
          <br />
          Pages: {this.props.book.pages}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
