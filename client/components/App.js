import React, { Component } from 'react';
import Login from './Login';
import Benefits from './Benefits';
import SuccessPage from './Success';


export default ({ children }) => {
  return <div className="container">{ children }</div>;
};
