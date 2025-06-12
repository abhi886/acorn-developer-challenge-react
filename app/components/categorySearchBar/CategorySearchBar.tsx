import React, { FunctionComponent } from 'react';
import { CategorySearchBarProps } from './PropTypes';
import ComboBox from '../core/comboBox/ComboBox';
import Input from '../core/input/Input';
import { Box, Button, Chip, Grid, Typography, Paper } from '@mui/material';

/**
 * CategorySearchBar Component
 *
 * Provides filters to search content by keyword, category, type, and tags.
 */

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
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 2,
        mx: 'auto',
        m: 2,
      }}
    >
      {/* Main Filter Inputs */}
      <Grid container spacing={1} sx={{ mb: 2 }}>
        {/* Search Field */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <Input
            id="search"
            label="Search Catalogue"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            placeholder="Search catalogue..."
            inputProps={{ 'aria-label': 'Search catalogue' }}
          />
        </Grid>

        {/* Combobox to select categories */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <ComboBox
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            label="Category"
          />
        </Grid>

        {/* Combobox to select types */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <ComboBox
            options={typeOptions}
            value={selectedType}
            onChange={setSelectedType}
            label="Type"
          />
        </Grid>

        {/* Clear Filters Button */}
        <Grid item xs={12} md={3} sx={{ height: '100%', alignItems: 'center' }}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            disabled={!isFilterActive}
            onClick={handleFilterClear}
            sx={{ height: '100%', p: 2 }}
          >
            Clear Filters
          </Button>
        </Grid>
      </Grid>
      {/* Filter by Tag section */}
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Filter by Tags
        </Typography>
        <Box
          role="group"
          aria-label="Tag filters"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {tagOptions?.map((tag) => {
            const isSelected = selectedTags?.includes(tag);
            return (
              <Chip
                key={tag}
                label={tag}
                color={isSelected ? 'primary' : 'default'}
                variant={isSelected ? 'filled' : 'outlined'}
                onClick={() =>
                  setSelectedTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  )
                }
                sx={{ cursor: 'pointer' }}
              />
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
};

export default CategorySearchBar;
