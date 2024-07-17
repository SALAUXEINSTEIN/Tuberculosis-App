import React from "react";

const LabelInput = (name, type, handleChange, value, labeltag) => {
  return (
    <label>
      {labeltag}
      <input type={type} name={name} value={value} onChange={handleChange} />
    </label>
  );
};

export default LabelInput;
