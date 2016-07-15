import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { bindActionCreators } from 'redux';

class PostsIndex extends React.Component {
  componentWillMount() {
      this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className="btn btn-primary">
            Add a post
          </Link>
        </div>
        list of posts
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex); // null is a stand in for state
