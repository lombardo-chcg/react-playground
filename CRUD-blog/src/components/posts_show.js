import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends React.Component {
  componentWillMount() {
    const post = this.props.fetchPost(this.props.params.id)
  }

  render() {
    return(
      <div>
          show post {this.props.params.id}
      </div>
    )
  }
}

export default connect(null, { fetchPost })(PostsShow)
