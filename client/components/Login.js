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
          <div className="content-text">
            <h1 className="content-title">Reimagining  Your Benefits</h1>
            <div className="content-subtitle">We help you effortlessly choose your benefits so you have transparent savings and a flexible lifestyle</div>
          </div>
          <form className="benefits-form" onSubmit={this.submitForm}>
            <div className="login-logo">
              <a href="#">Dough</a>
            </div>
            <input className="form-input" placeholder="email" name="email" />
            <input className="form-input" placeholder="password" name="password"/>
            <div>
              <button className="submit-button" type="submit">Login</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default Login;
