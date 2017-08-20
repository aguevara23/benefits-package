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
        <form onSubmit={this.submitForm}>
          <button className="submit-button" type="submit">Go Back</button>
        </form>
        Success! Thank you for submitting!
      </div>
    )
  }
}

export default SuccessPage;
