import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchBenefits';
import $ from 'jquery';

class BenefitsList extends Component {
  constructor(props) {
    super(props);

    this.state = { salary: '65000'};
    // console.log($(this)[0].state.salary)
    // console.log("test");


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
      alert("deselected");
     this.setState({ salary: this.state.salary - ({cost}.cost)*-1})
   }

    return (
      <div className="benefits-container">
        <div className="net-salary">
          <div className="salary-net">${this.state.salary}</div>
          <div className="salary-text">Total Compensation</div>
        </div>
        {this.renderBenefits()}
      </div>

    )
  }
}

export default graphql(query)(BenefitsList);
