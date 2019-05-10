import React from "react";

import { VARIABLE_TYPE_START } from "../store/constants";
import { useStateValue } from "../store";

const ExampleComponent = _ => {
  const [state, dispatch] = useStateValue(); // Call state and dispatch from store
  const { variable4 } = state;

  console.log(variable4);

  const handleButton = e => {
    e.preventDefault();
    dispatch({ type: VARIABLE_TYPE_START, payload: "Nathan Thomas" }); // Submit action creator to reducers using type
  };

  return (
    <div>
      <p>{variable4}</p>
      <button type="button" onClick={handleButton}>
        Click Me
      </button>
    </div>
  );
};

export default ExampleComponent;
