import React, { createContext, useContext, useReducer, useMemo } from "react";

export const Store = createContext(); // Create initial context

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sets up useMemo() for memoization
  const value = useMemo(() => {
    return {
      state,
      dispatch
    };
  }, [state]);

  // Returns component StoreContext with Provider for state context in application Index.js
  return (
    <Store.Provider value={[value.state, value.dispatch]}>
      {children}
    </Store.Provider>
  );
};

export const useStateValue = () => useContext(Store); // useContext gives us whatever was passed in as the value of the provider up above in StateContext.Provider
