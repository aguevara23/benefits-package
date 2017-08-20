import React, { Component } from 'react';

class Login extends Component {
//   constructor(props) {
//   super(props);
//
//   this.state = { title: ''};
// }
//   onSubmit(event) {
//   event.preventDefault();
//     .then(() => hashHistory.push('/benefits'))
// }

  render() {

    return (
      <div className="benefits">
        <div className="wrapper">
          <a className="form-logo" href="#">Logo</a>
          <form className="benefits-form">
            <input className="form-input" placeholder="email" />
            <input className="form-input" placeholder="password" />
            <button className="submit-button">Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

export default Login;
