import React, { FunctionComponent } from 'react';
import { CategorySearchBarProps } from './PropTypes';
import ComboBox from '../core/comboBox/ComboBox';

const CategorySearchBar: FunctionComponent<CategorySearchBarProps> = ({
  searchTerm,
  onSearchTermChange,
  categoryOptions,
  typeOptions,
  tagOptions,
  selectedCategory,
  selectedType,
  selectedTags,
  setSelectedCategory,
  setSelectedType,
  setSelectedTags,
  handleFilterClear,
  isFilterActive,
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

        <ComboBox
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
          label="Category"
        />

        <ComboBox
          options={typeOptions}
          value={selectedType}
          onChange={setSelectedType}
          label="Type"
        />

        {isFilterActive && (
          <button
            type="button"
            aria-label="Clear all filters"
            onClick={handleFilterClear}
          >
            Clear Filters
          </button>
        )}

        <fieldset>
          <legend>Filter by tags</legend>
          <div role="group" aria-label="Tag filters">
            {tagOptions?.map((tag) => {
              const isSelected = selectedTags?.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() =>
                    setSelectedTags((prev) =>
                      prev.includes(tag)
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag]
                    )
                  }
                  style={{
                    padding: '6px 12px',
                    margin: '4px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    backgroundColor: isSelected ? '#007BFF' : '#fff',
                    cursor: 'pointer',
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CategorySearchBar;
