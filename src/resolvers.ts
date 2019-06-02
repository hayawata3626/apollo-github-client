import gql from "graphql-tag";

const resolvers = {
  Mutation: {
    changeSearchText: (_, { text }, { cache }) => {
      const query = gql`
        query SearchText {
          searchText @client
        }
      `;

      cache.writeQuery({
        query,
        data: {
          searchText: text
        }
      });
    },
    applyInitialData: (_, { initialData }, { cache }) => {
      console.log(initialData.accountName, "initialData");
      cache.writeQuery({
        query: gql`
          query InitialData {
            accountName {
              id
              name
            }
            categories @client
          }
        `,
        data: {
          accountName: {
            ...initialData.accountName,
            __typename: "AccountName"
          },
          categories: [...initialData.categories]
        }
      });
    }
  }
};
export default resolvers;
