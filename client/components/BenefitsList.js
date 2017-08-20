import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchBenefits';
import Salary from './Salary';

class BenefitsList extends Component {
  constructor(props) {
    super(props);
  }

//   commafy(num) {
//     var str = num.toString().split('.');
//     if (str[0].length >= 5) {
//         str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
//     }
//     if (str[1] && str[1].length >= 5) {
//         str[1] = str[1].replace(/(\d{3})/g, '$1 ');
//     }
//     return str.join('.');
// }



  renderBenefits() {
    console.log(this.props);
    return this.props.data.benefits.map(({ id, name, cost }) => {
      // const benefitCost = commafy(cost);
      return (
        <div key={id} className="benefits-card">
          <div className="benefits-image"></div>
          <div className="benefits-name">{name}</div>
          <div className="benefits-description">This will be a description for each benefit</div>
          <div className="benefits-cost">${cost}</div>
        </div>




        // <li key={id} className="collection-item">
        //   {name}
        //   {cost}
        // </li>
      );
    });
  }

  render() {
    if(this.props.data.loading) {return <div /> }

    return (
      <div className="benefits-container">
        <Salary />
        {this.renderBenefits()}
      </div>
      // <div>
      //   <ul className="collection">
      //     {this.renderBenefits()}
      //   </ul>
      // </div>

    )
  }
}

export default graphql(query)(BenefitsList);
