'use client';
import { useState, useMemo } from 'react';
import CategorySearchBar from '../categorySearchBar/CategorySearchBar';
import ContentList from '../contentList/ContentList';
import { Box, Typography, Paper } from '@mui/material';

/**
 * FilterableContentCatalogue Component
 *
 * Displays a catalogue of content that can be filtered by:
 * - Search term
 * - Category
 * - Content type
 * - Tags
 */

const FilterableContentCatalogue = ({ catalogueData }) => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const items = catalogueData.items || [];
  const isFilterActive =
    searchTerm || selectedCategory || selectedType || selectedTags.length > 0;

  // Handlers
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

  // Derived Filter Options
  const categoryOption = [
    ...new Set(items.map((i) => i.category?.name).filter(Boolean)),
  ];

  const typeOptions = [...new Set(items.map((i) => i.contenttype))];

  const tagOptions = [
    ...new Set(items.flatMap((i) => i.tags?.map((tag) => tag.name) ?? [])),
  ];

  // Filtering Logic (Memoized)
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

  // JSX Output
  return (
    <>
      {/* Search and filter seaction */}
      <section aria-labelledby="filters-heading">
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mx: 'auto',
            backgroundColor: '#fefefe',
          }}
        >
          <Typography
            id="filters-heading"
            variant="h5"
            fontWeight={600}
            gutterBottom
            component="h2"
            align="center"
          >
            Filter Catalogue
          </Typography>
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
        </Paper>
      </section>

      {/* Results Section */}
      <section aria-labelledby="results-heading">
        <Box px={2} textAlign="center" sx={{ mt: 6 }}>
          {filteredItems.length === 0 ? (
            <Typography variant="body1">
              0 results
              {searchTerm && (
                <>
                  {' '}
                  for <strong>"{searchTerm}"</strong>
                </>
              )}
              {selectedCategory && (
                <>
                  {' '}
                  in category <strong>{selectedCategory}</strong>
                </>
              )}
              {selectedType && (
                <>
                  {' '}
                  of type <strong>{selectedType}</strong>
                </>
              )}
              {selectedTags.length > 0 && (
                <>
                  {' '}
                  with tag{selectedTags.length > 1 ? 's' : ''}{' '}
                  <strong>{selectedTags.join(', ')}</strong>
                </>
              )}
              .
            </Typography>
          ) : (
            <ContentList content={filteredItems} />
          )}
        </Box>
      </section>
    </>
  );
};

export default FilterableContentCatalogue;
