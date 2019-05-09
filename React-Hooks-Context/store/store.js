import React, { createContext, useContext, useReducer, useMemo } from "react";

export const Store = createContext(); // Create initial context

export const StateProvider = ({ rootReducer, initialState, children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState); // Hook takes in reducer and state and returns state and dispatch

  // Sets up useMemo() for memoization efficiency
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
