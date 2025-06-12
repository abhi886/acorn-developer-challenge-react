import React, { FunctionComponent } from "react";
import { CategorySearchBarProps } from "./PropTypes";

const CategorySearchBar  : FunctionComponent<CategorySearchBarProps>  = ({
  searchTerm,
  onSearchTermChange,
  categoryOptions,
  typeOptions,
  tagOptions,
}) => {
  return (
    <>
      <form>
        <label htmlFor="search">Search</label>
        <input
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          id="search"
          name="search"
          type="text"
          placeholder="Search catalogue..."
          aria-label="Search catalogue"
        />

        <label htmlFor="category">Category</label>
        <select id="category" name="category" aria-label="Select category">
          <option value="">All Categories</option>
          {categoryOptions?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="type">Type</label>
        <select id="type" name="type" aria-label="Select type">
          <option value="">All Types</option>
          {typeOptions?.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <fieldset>
          <legend>Filter by tags</legend>
          <div role="group" aria-label="Tag filters">
            {tagOptions?.map((tag) => (
              <button key={tag} type="button">
                {tag}
              </button>
            ))}
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CategorySearchBar;
