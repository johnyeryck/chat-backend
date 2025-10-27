import { createContext } from "react";
export interface DataInterface {
  users: { username: string }[];
  userLoged: string;
}

export const MyContext = createContext<DataInterface[] | undefined>(undefined);
