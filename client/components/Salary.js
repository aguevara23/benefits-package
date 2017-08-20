import React, { Component } from 'react'

class NetSalary extends Component {
  constructor(props) {
    super(props);

    this.state = { salary: 65000};
  }

  render() {
    return (

      <div className="net-salary">
        <div className="salary-net">${this.state.salary}</div>
        <div className="salary-text">Total Compensation</div>
      </div>
    )
  }
}

export default NetSalary;
