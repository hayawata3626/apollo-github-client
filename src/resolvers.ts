import gql from "graphql-tag";

const resolvers = {
  Mutation: {
    changeSearchTextValue: (_, { text }, { cache }) => {
      console.log("called");
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
    }
  }
};
export default resolvers;
