import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavBar extends Component {
  render() {
    return (
      <div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">about</Link></li>
            </ul>
      </div>
    );
  }
}
