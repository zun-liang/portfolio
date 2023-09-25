import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const { data } = await client.query({
  query: gql`
    {
      user(login: "zun-liang") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                url
                homepageUrl
                createdAt
                description
                watchers {
                  totalCount
                }
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  `,
});

const { user } = data;
const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);
