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
  initialState4: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VARIABLE_NAMES_STARTED:
      return {
        ...state,
        initialState1: action.payload
      };
    case VARIABLE_NAMES_SUCCESS:
      return {
        ...state,
        initialState2: true
      };
    case VARIABLE_NAMES_ERROR:
      return {
        ...state,
        initialState3: [...state.initialState3, action.payload]
      };
    default:
      return state;
  }
};

// Don't forget to spread in previous state in appropriate places
