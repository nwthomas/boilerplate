import axios from "axios"; // Make sure to install dependencies
import {
  VARIABLE_NAMES_STARTED,
  VARIABLE_NAMES_SUCCESS,
  VARIABLE_NAMES_ERROR
} from "../types"; // Import variable names to avoid spelling errors

// Action creator function that uses thunk
export const actionCreator = _ => dispatch => {
  dispatch({ type: VARIABLE_NAMES_STARTED }); // Initial dispatch
  axios
    .get("insert url")
    .then(res => {
      dispatch({ type: VARIABLE_NAMES_SUCCESS, payload: res.data }); // Success dispatch
    })
    .catch(err => {
      dispatch({ type: VARIABLE_NAMES_ERROR, payload: err.data }); // Error dispatch
    });
};
