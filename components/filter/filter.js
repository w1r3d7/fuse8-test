import React from 'react';

const Filter = () => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  }
  return (
   <form className="filter" onSubmit={handleFormSubmit}>
     <label htmlFor="filter" className="filter__label">
       Filter
     </label>
     <input className="filter__input" id="filter" type="text" placeholder="Type to search, minimum 3 letters" />
   </form>
  );
}

export default Filter;