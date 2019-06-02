type Category = {
  id: number;
  name: string;
};

type State = {
  searchText: string;
  __typename: string;
  accountName: object;
  categories: Category[] | null;
};

const initialState: State = {
  searchText: "",
  accountName: {
    id: null,
    name: "",
    __typename: "AccountName"
  },
  categories: null,
  __typename: "State"
};

export default initialState;
