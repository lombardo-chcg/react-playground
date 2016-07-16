import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  deletePost() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      })
  }

  render() {

      if (!this.props.post) {
        return <div>Loading...</div>
      }

      return(
      <div>
          <h3>{this.props.post.title}</h3>
          <h6>Categories: {this.props.post.categories}</h6>
          <p>{this.props.post.content}</p>
          <button onClick={this.deletePost.bind(this)} className='btn btn-info pull-xs-right'>Delete Post</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
