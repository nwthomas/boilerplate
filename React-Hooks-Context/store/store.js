import React, {
  createContext,
  useContext,
  useReducer
} from "./node_modules/react";
import { initialState, reducer } from "./reducers/index";

export const Store = createContext(); // Create initial contest

export const StateProvider = ({ reducer, initialState, children }) => {
  <Store.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Store.Provider>;
};

export const useStateValue = () => useContext(StateContext); // useContext gives us whatever was passed in as the value of the provider up above in StateContext.Provider
