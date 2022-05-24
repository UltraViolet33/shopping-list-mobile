import { createContext, useContext, useReducer } from "react";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const logo = "test";
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
