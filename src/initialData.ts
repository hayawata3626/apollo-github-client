export type Category = {
  id: number;
  name: string;
};

export type AccountName = {
  id: number;
  name: string;
};

export const initialData = {
  accountName: { id: 1, name: "jiro" },
  categories: [{ id: 1, name: "react" }, { id: 2, name: "apollo" }]
};

export type JsonModel = {
  accountName: AccountName | null;
  categories: Category[] | null;
};
