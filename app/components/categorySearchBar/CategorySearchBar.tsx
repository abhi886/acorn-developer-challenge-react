import React, { FunctionComponent } from 'react';
import { CategorySearchBarProps } from './PropTypes';
import ComboBox from '../core/comboBox/ComboBox';
import Input from '../core/input/Input';
import { Box, Button, Chip, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

/* CategorySearchBar Component
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
        p: { xs: 2, sm: 3, md: 4 },
        mb: 4,
        borderRadius: 2,
      }}
    >
      {/* Main Filter Inputs */}
      <Grid container spacing={2} alignItems="center">
        {/* Search Field */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <Input
            id="search"
            label="Search Catalogue"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onSearchTermChange(e.target.value)
            }
            placeholder="Search catalogue..."
            slotProps={{
              htmlInput: {
                'data-testid': 'search-id',
              },
            }}
          />
        </Grid>

        {/* Combobox to select categories */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <ComboBox
            id={'select-category'}
            options={categoryOptions}
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            label="Choose a category"
          />
        </Grid>

        {/* Combobox to select types */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <ComboBox
            id={'select-type'}
            options={typeOptions}
            value={selectedType}
            onValueChange={setSelectedType}
            label="Choose a type"
          />
        </Grid>

        {/* Clear Filters Button */}
        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            disabled={!isFilterActive}
            onClick={handleFilterClear}
            sx={{ height: '100%', p: 2 }}
            startIcon={<RestartAltIcon />}
          >
            Clear Filters
          </Button>
        </Grid>
      </Grid>
      {/* Filter by Tag section */}
      <Box sx={{ mt: 4 }}>
        <Typography
          component="h3"
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: 500 }}
        >
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
                sx={{
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  px: 1,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
};

export default CategorySearchBar;
