'use client';
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  CardMedia,
} from '@mui/material';

/**
 * A modal dialog that shows detailed content information.
 * Displays image, summary, category, type, tags, and a button to view more.
 *
 * Props:
 * - selectedItem: the item object to show details for
 * - closeModal: function to close the modal
 */

const ContentModal = ({ selectedItem, closeModal }) => {
  // Return null if no item is selected
  if (!selectedItem) return null;

  const { summarytext, category, contenttype, tags, fullname, imageurl, url } =
    selectedItem;

  return (
    <Dialog
      open={Boolean(selectedItem)}
      onClose={closeModal}
      maxWidth="md"
      fullWidth
      aria-labelledby="content-dialog-title"
      sx={{ '& .MuiDialog-paper': { borderRadius: 3, p: 2 } }}
    >
      {/* Title */}
      <DialogTitle
        id="content-dialog-title"
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          pb: 0,
        }}
      >
        {fullname}
      </DialogTitle>

      {/* Main Content */}
      <DialogContent dividers sx={{ pt: 2, pb: 3 }}>
        {/* Image or fallback */}
        {imageurl ? (
          <CardMedia
            component="img"
            image={imageurl}
            alt={fullname}
            sx={{
              width: '100%',
              height: 300,
              borderRadius: '12px',
              objectFit: 'cover',
            }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: 300,
              backgroundColor: '#f0f0f0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontStyle: 'italic',
              fontSize: '1rem',
            }}
          >
            No image available
          </Box>
        )}

        {/* Summary Section */}
        <Typography variant="subtitle1" gutterBottom fontWeight={500}>
          <strong>Summary</strong>
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {summarytext || 'No summary provided.'}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Meta Details */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Typography variant="body2">
            <strong>Category:</strong> {category?.name || 'N/A'}
          </Typography>
          <Typography variant="body2">
            <strong>Type:</strong> {contenttype || 'N/A'}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Tags */}
        {tags?.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom fontWeight={500}>
              <strong>Tags</strong>
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tags.map((tag) => (
                <Chip key={tag.name} label={tag.name} />
              ))}
            </Box>
          </Box>
        )}
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={closeModal} color="secondary">
          Close
        </Button>
        {url && (
          <Button
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
          >
            View Full Content
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ContentModal;
