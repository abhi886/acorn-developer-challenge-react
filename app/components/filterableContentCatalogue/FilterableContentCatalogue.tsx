import React from 'react';
import CategorySearchBar from '../categorySearchBar/CategorySearchBar';
import CategoryList from '@/app/components/categoryList/CategoryList';

const FilterableContentCatalogue = () => {
  return (
    <>
     <section aria-labelledby="filters-heading">
          <h2 id="filters-heading">Filter Catalogue</h2>
          <CategorySearchBar />
        </section>
  
        <section aria-labelledby="results-heading">
          <h2 id="results-heading">Catalogue Results</h2>
         <CategoryList />
        </section>
    </>
  )
}

export default FilterableContentCatalogue