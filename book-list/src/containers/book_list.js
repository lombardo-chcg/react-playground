import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map(function(book) {
      return (
        <li key={book.title} className = "list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // return value is turned into props in the Component!
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
// connect takes a function and a component and creates a container
