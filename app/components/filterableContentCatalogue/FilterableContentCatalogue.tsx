'use client';
import React, { useCallback } from 'react';
import { useState, useMemo } from 'react';
import CategorySearchBar from '../categorySearchBar/CategorySearchBar';
import ContentList from '../contentList/ContentList';

const FilterableContentCatalogue = ({ catalogueData }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const items = catalogueData.items || [];
  const isFilterActive =
    searchTerm || selectedCategory || selectedType || selectedTags.length > 0;

  const handleSearchChange = (newValue: string) => {
    setSearchTerm(newValue);
  };

  // function to handle the clear all button
  const handleFilterClear = () => {
    if (!isFilterActive) return;
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedType('');
    setSelectedTags([]);
  };

  const categoryOption = [
    ...new Set(items.map((i) => i.category?.name).filter(Boolean)),
  ];

  const typeOptions = [...new Set(items.map((i) => i.contenttype))];

  const tagOptions = [
    ...new Set(items.flatMap((i) => i.tags?.map((tag) => tag.name) ?? [])),
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = selectedCategory
        ? item.category?.name === selectedCategory
        : true;

      const matchesType = selectedType
        ? item.contenttype === selectedType
        : true;

      const matchesTags =
        selectedTags.length > 0
          ? selectedTags.every((tag) => item.tags?.some((t) => t.name === tag))
          : true;

      const matchesSearch = searchTerm
        ? item.fullname.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesCategory && matchesType && matchesTags && matchesSearch;
    });
  }, [items, selectedCategory, selectedType, selectedTags, searchTerm]);
  return (
    <>
      <section aria-labelledby="filters-heading">
        <h2 id="filters-heading">Filter Catalogue</h2>
        <CategorySearchBar
          onSearchTermChange={handleSearchChange}
          searchTerm={searchTerm}
          categoryOptions={categoryOption}
          typeOptions={typeOptions}
          tagOptions={tagOptions}
          selectedCategory={selectedCategory}
          selectedType={selectedType}
          selectedTags={selectedTags}
          setSelectedCategory={setSelectedCategory}
          setSelectedType={setSelectedType}
          setSelectedTags={setSelectedTags}
          isFilterActive={isFilterActive}
          handleFilterClear={handleFilterClear}
        />
      </section>

      <section aria-labelledby="results-heading">
        <h2 id="results-heading">Catalogue Results</h2>

        {filteredItems.length === 0 ? (
          <p>
            0 results for content matching <strong>{searchTerm}</strong>
            {selectedCategory && (
              <>
                {' '}
                in category <strong>{selectedCategory}</strong>
              </>
            )}
            {selectedType && (
              <>
                {' '}
                and <strong>{selectedType}</strong>
              </>
            )}
            .
          </p>
        ) : (
          <ContentList content={filteredItems} />
        )}
      </section>
    </>
  );
};

export default FilterableContentCatalogue;
