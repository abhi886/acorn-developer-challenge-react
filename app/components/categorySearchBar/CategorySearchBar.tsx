import React from 'react'

const CategorySearchBar = () => {
  return (
    <>
         <form>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search catalogue..."
              aria-label="Search catalogue"
            />
  
            <label htmlFor="category">Category</label>
            <select id="category" name="category" aria-label="Select category">
              <option value="">All Categories</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
  
            <label htmlFor="type">Type</label>
            <select id="type" name="type" aria-label="Select type">
              <option value="">All Types</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
            </select>
  
            <fieldset>
              <legend>Filter by tags</legend>
              <div role="group" aria-label="Tag filters">
                <button type="button">Tag1</button>
                <button type="button">Tag2</button>
                <button type="button">Tag3</button>
                <button type="button">Tag4</button>
              </div>
            </fieldset>
          </form>
    </>
  )
}

export default CategorySearchBar