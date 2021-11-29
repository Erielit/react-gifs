import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState("");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategories((cats) => [value, ...cats]);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
