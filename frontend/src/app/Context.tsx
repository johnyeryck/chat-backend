import { createContext } from "react";
interface Context {
  users?: string[];
  userloged?: string;
}
export const MyContext = createContext<Context | undefined>(undefined);
