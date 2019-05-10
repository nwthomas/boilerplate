import React, { createContext, useContext, useReducer, useMemo } from "react";

export const StateContext = createContext(); // Create initial context

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Hook takes in reducer and state and returns state and dispatch

  // Sets up useMemo() for memoization efficiency
  const value = useMemo(() => {
    return {
      state,
      dispatch
    };
  }, [state]);

  // Returns component StoreContext with Provider for state context in application Index.js
  return (
    <StateContext.Provider value={[value.state, value.dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

// useContext() is a hook that returns the value of the nearest Context API Provider above it in the tree
// useContext() evaluates down to state and dispatch in this
export const useStateValue = () => useContext(StateContext);
