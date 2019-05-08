import { reducer } from "./reducer"; // Must import each type of reducer you use
import { combineReducers } from "redux"; // Import that allows you to combine reducers

// Combines reducers - don't forget to reference state by saying state.reducer.item
export default combineReducers({
  reducer
});
