import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navbar'

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1> We serve Chuck Norris Jokes for all you lovers out there</h1>
      </div>
    );
  }
}
