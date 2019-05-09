import React from "react";

import { VARIABLE_TYPE_START } from "../store/types";
import { useStateValue } from "../store/store";

const ExampleComponent = _ => {
  const [{ variable4 }, dispatch] = useStateValue(); // Call state and dispatch from store

  const handleButton = e => {
    e.preventDefault();
    dispatch({ type: VARIABLE_TYPE_START, payload: { variable4: "Dude" } }); // Submit action creator to reducers using type
  };

  return (
    <div>
      <button type="button" onClick={handleButton}>
        Click Me
      </button>
    </div>
  );
};

export default ExampleComponent;
