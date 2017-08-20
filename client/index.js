import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Benefits from './components/Benefits';
import Login from './components/Login';
import BenefitsList from './components/BenefitsList';
import SuccessPage from './components/Success';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

// const Root = () => {
//   return (
//     <ApolloProvider client={client}>
//       <Router history={hashHistory}>
//         <Route path="/" component={App}>
//           // <IndexRoute component={Login} />
//           <Route path="login" component={Login} />
//           <Route path="benefits" component={Benefits} />
//         </Route>
//       </Router>
//     </ApolloProvider>
//   );
// };
//
// ReactDOM.render(
//   <Root />,
//   document.querySelector('#root')
// );

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        // <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="benefits" component={BenefitsList} />
        <Route path="success" component={SuccessPage} />
      </Route>
    </Router>
  </ApolloProvider>
  , document.querySelector('#root')
)
