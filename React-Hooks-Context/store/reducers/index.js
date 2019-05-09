import { initialState as exampleState, exampleReducer } from "./exampleReducer";

export const initialState = { ...exampleState };

// Takes initialState objects, imported above, as well as an action in as the parameters
export const rootReducer = ({ exampleState }, action) => {
  // Middleware goes here, i.e. calling analytics service, console.log(), etc.
  console.log("Action", action); // Console.log() the changes from actions and types
  console.log(exampleState); // Console.log() the new state (add more as it comes up)

  // Spreads in reducers to produce clean references
  return {
    ...exampleReducer()
    // Can add in more spread-in reducers as needed
  };
};
