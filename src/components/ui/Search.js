import React, { useState } from 'react';

const Search = ({ setQuery }) => {
  const [text, setText] = useState('');

  const textChangeHandler = event => {
    setText(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters..."
          autoFocus
          value={text}
          onChange={textChangeHandler}
        />
      </form>
    </section>
  );
};

export default Search;
