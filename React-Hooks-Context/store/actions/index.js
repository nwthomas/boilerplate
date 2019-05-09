import {
  VARIABLE_TYPE_START,
  VARIABLE_TYPE_SUCCESS,
  VARIABLE_TYPE_ERROR
} from "../types"; // Import types just like Redux
import { Store } from "../store"; // Import Store containing state and dispatch
import axios from "axios";
const { dispatch } = Store; // Descructure out dispatch from Store

export const actionCreatorOne = () => {
  dispatch({ type: VARIABLE_TYPE_START });
  axios
    .get("your Url here for the HTTP call")
    .then(res => {
      dispatch({ type: VARIABLE_TYPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: VARIABLE_TYPE_ERROR, payload: err });
    });
};

export const actionCreatorTwo = () => {
  return {
    type: VARIABLE_TYPE_SUCCESS,
    payload: {}
  };
};
