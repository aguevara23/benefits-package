import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, Redirect, hashHistory } from 'react-router';
import query from '../queries/fetchBenefits';
import $ from 'jquery';
// import logo from '../images/dough-logo.jpg';

class BenefitsList extends Component {
  constructor(props) {
    super(props);

    this.state = { salary: '65000'};
    // console.log($(this)[0].state.salary)
    // console.log("test");
  }

  submitForm(event) {
    event.preventDefault();
    hashHistory.push('/success');
}


  renderBenefits() {


    return this.props.data.benefits.map(({ id, name, cost }) => {
      return (

        <div key={id} id={id} className="benefits-card" onClick={() =>

          $('#'+{id}.id).toggleClass("deselected")
            // .then(
            //   this.setState({ salary: this.state.salary - ({cost}.cost)*-1})
            // )
            // .then(console.log({cost}.cost))

        }>
          <div className="benefits-image"></div>
          <div className="benefits-name">{name}</div>
          <div className="benefits-description">This will be a description for each benefit</div>
          <div className="benefits-cost">${cost}</div>
        </div>
      );
    });
  }

  render() {
    if(this.props.data.loading) {return <div /> }

    // if($('.benefits-card').hasClass('deselected')){
    //   console.log("this is deselected");
    // }

    if($('.benefits-card').hasClass("deselected")){
    console.log("deselected");
     this.setState({ salary: this.state.salary - ({cost}.cost)*-1})
   }

    return (
    <div className="container">

      <div className="header">
        <div className="header-login">
          <div className="header-login-logo">
            <a href="#">Dough</a>
          </div>
          <div className="header-login-user">Hi, Ben Iffitz!</div>
          <button className="submit-button"><a href="#">Log Out</a></button>
        </div>
        <div className="salary-net">${this.state.salary}</div>
        <div className="salary-text">Total Compensation</div>
        <hr />
      </div>
      <div className="benefits-container">
        {this.renderBenefits()}
        <form className="benefits-submit" onSubmit={this.submitForm}>
        <button type="submit" className="benefits-submit-button">Submit</button>
        </form>
      </div>
    </div>
    )
  }
}

export default graphql(query)(BenefitsList);
