import React, { Component } from 'react';
import { Redirect, hashHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
  super(props);

  this.state = {

  };
}
  submitForm(event) {
    event.preventDefault();
    hashHistory.push('/benefits');
}

  render() {
    return (
      <div className="benefits">
        <div className="wrapper">
          <form className="benefits-form" onSubmit={this.submitForm}>
            <div className="login-logo">
              <a href="#">Dough</a>
            </div>
            <input className="form-input" placeholder="email" name="email" />
            <input className="form-input" placeholder="password" name="password"/>
            <button className="submit-button" type="submit">Login</button>
          </form>
        </div>

      </div>
    )
  }
}

export default Login;
