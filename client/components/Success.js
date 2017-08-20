import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class SuccessPage extends Component {
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
      <div>
        <form className="submit-form" onSubmit={this.submitForm}>
          <div className="login-logo">
            <a href="#">Dough</a>
          </div>
          <div className="success-title">
            <hr />
            <h1>Thank you!</h1>
            <hr />
            <div className="success-subtitle">
              <h4>For being such an awesome person.</h4>
              <h4>You've just taken a major step towards adding more dough into your pocket.</h4>
            </div>
          </div>
          <div className="success-button">
            <button className="submit-button" type="submit">Go Back</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SuccessPage;
