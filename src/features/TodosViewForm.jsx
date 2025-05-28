import { useState, useEffect } from 'react';
import TodosViewFormStyles from './TodosViewForm.module.css';

function TodosViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  function preventRefresh(event) {
    event.preventDefault();
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      //update parent value after delay
      setQueryString(localQueryString);
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [localQueryString, setQueryString]);

  return (
    <form onSubmit={preventRefresh}>
      <div className={TodosViewFormStyles.text}>
        <label htmlFor="search">Search to dos</label>
        <input
          id="search"
          type="text"
          value={localQueryString}
          onChange={(event) => setLocalQueryString(event.target.value)}
        />
        <button type="button" onClick={() => setLocalQueryString('')}>
          Clear
        </button>
      </div>
      <div className={TodosViewFormStyles.text}>
        <label htmlFor="sortField">Sort by</label>
        <select
          id="sortField"
          value={sortField}
          onChange={(event) => setSortField(event.target.value)}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>

        <label htmlFor="sortDirection">Direction</label>
        <select
          id="sortDirection"
          value={sortDirection}
          onChange={(event) => setSortDirection(event.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
  );
}

export default TodosViewForm;
