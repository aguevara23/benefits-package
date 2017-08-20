import gql from 'graphql-tag';

export default gql`
  {
    benefits {
      id
      name
      cost
    }
  }
`;
