import React, { FunctionComponent } from 'react';
import { CategorySearchBarProps } from './PropTypes';

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
        <select
          id="category"
          name="category"
          aria-label="Select category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory?.(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoryOptions?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="type">Type</label>
        <select
          id="type"
          name="type"
          aria-label="Select type"
          value={selectedType}
          onChange={(e) => setSelectedType?.(e.target.value)}
        >
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
