import React, { Component } from 'react';
import styles from './NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-center align-items-center h-100vh"><h2 className="m-0 blue-default">Route Not Found</h2></div>      
    );
  }
}
