import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsCreate extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      //blog post created, navigate to home page
      this.context.router.push('/')
    })
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props; //same as const handleSubmit = this.props.handleSubmit;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>title</label>
          <input type='text' className='form-control' {...title} />
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>categories</label>
          <input type='text' className='form-control' {...categories} />
          <div className='text-help'>
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>content</label>
          <textarea className='form-control' {...content} />
          <div className='text-help'>
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/'><button className='btn btn-danger'>Cancel</button></Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Must have at least 1 category';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors
}

// connect: 1st arg is mapStateToProps, 2nd arg is mapDispatchToProps
// reduxForm: 1st arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsCreate',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsCreate);
