const { gql } = require('@apollo/client');

export const GET_PORTFOLIOS = gql`
  query GetPortfolios {
    projects {
      title
      description
      render
      gitRepo
      img {
        url
      }
    }
  }
`;