import React from 'react';
import { Link } from 'react-router'

export default class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <Link to='/'><button className='btn btn-info pull-xs-right'>Home</button></Link>
      </nav>
    )
  }
}
