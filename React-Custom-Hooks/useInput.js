import { useState } from "react";

export const useInput = initialValue => {
  // Sets initial value of input
  const [value, setValue] = useState(initialValue);

  // Handles user input changes
  const handleChanges = e => {
    setValue(e.target.value);
  };

  // Returns three values in array to be destructured out and used for duplication in any/all inputs
  return [value, setValue, handleChanges];
};
