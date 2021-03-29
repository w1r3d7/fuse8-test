import React, { useEffect, useState } from "react";

const Filter = ({ onFilterInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onFilterInput(inputValue);
  };

  useEffect(() => {
    const valueLength = String(inputValue).length;

    if (valueLength > 2) {
      onFilterInput(inputValue);
    }

    if (valueLength === 0) {
      onFilterInput(inputValue);
    }
  }, [inputValue]);

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <form className="filter" onSubmit={handleFormSubmit}>
      <label htmlFor="filter" className="filter__label">
        Filter
      </label>
      <input
        className="filter__input"
        id="filter"
        type="text"
        onInput={handleInputChange}
        value={inputValue}
        placeholder="Type to search, minimum 3 letters"
        autoComplete="off"
      />
    </form>
  );
};

export default Filter;
