import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { bindActionCreators } from 'redux';

class PostsIndex extends React.Component {
  componentWillMount() {
      this.props.fetchPosts();
  }

  renderPosts() {
    console.log(this.props.posts)
    return this.props.posts.map(function(post) {
      return(
        <Link to={`posts/${post.id}`}>
          <li className='list-group-item' key={post.id}>
              <span className='pull-xs-right'>{post.categories}</span>
              <strong>{post.title}</strong>
          </li>
      </Link>
      )
    })
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex); // null is a stand in for state
