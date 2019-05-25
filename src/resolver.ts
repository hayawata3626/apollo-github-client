import gql from "graphql-tag";

const resolvers = {
  Mutation: {
    changeValue: (_, { text }, { cache }) => {
      const query = gql`
        query SearchText {
          searchText @client
        }
      `;

      const data = cache.readQuery({ query });
      console.log(text, "text");
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
