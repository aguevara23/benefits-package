import React, { Component } from 'react';
import Login from './Login';
import Benefits from './Benefits';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         This is the App Component;
//       </div>
//     );
//   }
// }


export default ({ children }) => {
  return <div className="container">{ children }</div>;
};
