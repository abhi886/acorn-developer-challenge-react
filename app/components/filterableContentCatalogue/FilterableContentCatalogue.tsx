'use client';
import React from 'react';
import { useState } from 'react';
import CategorySearchBar from '../categorySearchBar/CategorySearchBar';
import ContentList from '../contentList/ContentList';

const FilterableContentCatalogue = ({catalogueData}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

  const items = catalogueData.items || [];
  const handleSearchChange = (newValue: string) => {
        setSearchTerm(newValue);
      };

  const categoryOption = [...new Set(items
    .map(i => i.category?.name)
    .filter(Boolean))];

  const typeOptions = [...new Set(
      items.map(i => i.contenttype)
    )]; 

  const tagOptions = [...new Set(
      items.flatMap(i => i.tags?.map(tag => tag.name) ?? [])
    )];

  return (
    <>
     <section aria-labelledby="filters-heading">
          <h2 id="filters-heading">Filter Catalogue</h2>
          <CategorySearchBar onSearchTermChange={handleSearchChange} searchTerm={searchTerm} categoryOptions={categoryOption}
          typeOptions = {typeOptions} tagOptions={tagOptions}
          />
        </section>
  
        <section aria-labelledby="results-heading">
          <h2 id="results-heading">Catalogue Results</h2>
         <ContentList />
        </section>
    </>
  )
}

export default FilterableContentCatalogue