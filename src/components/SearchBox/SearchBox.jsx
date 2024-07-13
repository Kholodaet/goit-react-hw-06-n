import { useId } from "react";

import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onFilter }) => {
  const filterFieldId = useId();

  return (
    <div className={css.searchContainer}>
      <label htmlFor={filterFieldId} className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="filter"
        id={filterFieldId}
        value={value}
        placeholder="Enter search prompt..."
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
