import oneReducer from "./oneReducer";
import twoReducer from "./twoReducer";

export const mainReducer = ({ one, two }, action) => {
  // middleware goes here, i.e. calling analytics service, etc.

  return {
    one: oneReducer(one, action),
    two: twoReducer(two, action)
  };
};
