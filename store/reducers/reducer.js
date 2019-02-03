import {
  VARIABLE_NAMES_STARTED,
  VARIABLE_NAMES_SUCCESS,
  VARIABLE_NAMES_ERROR
} from "../types"; // Import of variable names so that you can use them/reduce errors

// Sets initial state for the application
const initialState = {
  initialState1: "",
  initialState2: false,
  initialState3: [],
  initialState4: {},
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VARIABLE_NAMES_STARTED:
      return {
        ...state,
        initialState2: true
      };
    case VARIABLE_NAMES_SUCCESS:
      return {
        ...state,
        initialState2: false,
        initialState1: { ...state.initialState1, initialState3: action.payload } // Spread in of initial state + updated state
      };
    case VARIABLE_NAMES_ERROR:
      return {
        ...state,
        error: "Random string content",
        initiaState2: false
      };
    default:
      return state;
  }
};

// Don't forget to spread in previous state in appropriate places
