import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
      var that = this;
      return this.props.books.map(function(book) {
        return (
          <li
            key={book.title}
            onClick={() => that.props.selectBook(book)}
            className = "list-group-item">
            {book.title}
          </li>
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

// return value is turned into props in the Component!
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// return value is turned into props in the Component!
function mapDispatchToProps(dispatch) {
  // when selectBook is called, pass result to ALL reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a component and creates a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
