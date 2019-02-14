import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h1>hi</h1>
    </Layout>
  )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    name
                    relativePath
                    ext
                }
            }
        }
    }
`;
