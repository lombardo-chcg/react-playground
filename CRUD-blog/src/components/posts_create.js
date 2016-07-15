import React from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsCreate extends React.Component {


  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props; //same as const handleSubmit = this.props.handleSubmit;

    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>

        <div className='form-group'>
          <label>title</label>
          <input type='text' className='form-control' {...title} />
        </div>

        <div className='form-group'>
          <label>categories</label>
          <input type='text' className='form-control' {...categories} />
        </div>

        <div className='form-group'>
          <label>content</label>
          <textarea className='form-control' {...content} />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

// connect: 1st arg is mapStateToProps, 2nd arg is mapDispatchToProps
// reduxForm: 1st arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsCreate',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsCreate);
