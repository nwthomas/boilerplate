import { initialState as example, exampleReducer } from "./exampleReducer";

export const initialState = { ...example }; // Can spread in other state from other reducers as needed to create complete initialState

// Takes initialState objects, imported above, as well as an action in as the parameters
export const rootReducer = (initialState, action) => {
  // Middleware goes here, i.e. calling analytics service, console.log(), etc.

  console.log("Action:", action); // Console.log() the changes from actions and types
  console.log("Current State:", example); // Console.log() the new state (add more as it comes up)

  // Spreads in reducers to produce clean references
  return {
    ...exampleReducer(initialState, action) // Make sure to include the arguments of what you're passing in
    // Can add in more spread-in reducers as needed
  };
};
