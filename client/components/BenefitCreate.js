import React, { Component } from 'react';

class BenefitCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cost: 0
    };
  }

  render() {
    return (
      <form>
        <label>Add Benefit</label>
        <input />
      </form>
    )
  }
}

export default BenefitCreate;
