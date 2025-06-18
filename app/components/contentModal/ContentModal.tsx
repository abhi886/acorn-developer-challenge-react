import React, { FC } from 'react';
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
import { ContentModalPropTypes } from './PropTypes';

/**
 * A modal dialog that shows detailed content information.
 * Displays image, summary, category, type, tags, and a button to view more.
 *
 * Props:
 * - selectedItem: the item object to show details for
 * - closeModal: function to close the modal
 */

const ContentModal: FC<ContentModalPropTypes> = ({
  selectedItem,
  closeModal,
}) => {
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
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 4,
          p: 3,
          backgroundColor: '#fff',
        },
      }}
    >
      {/* Title */}
      <DialogTitle
        id="content-dialog-title"
        sx={{
          fontWeight: 600,
          fontSize: '1.75rem',
          mb: 1,
        }}
      >
        {fullname}
      </DialogTitle>

      {/* Main Content */}
      <DialogContent dividers sx={{ pt: 1 }}>
        {/* Image or fallback */}
        {imageurl ? (
          <CardMedia
            component="img"
            image={imageurl}
            alt={fullname}
            sx={{
              maxWidth: '100%',
              maxHeight: 300,
              borderRadius: 2,
              objectFit: 'contain',
              display: 'block',
            }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: { xs: 200, sm: 300 },
              backgroundColor: '#f0f0f0',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontStyle: 'italic',
            }}
          >
            No image available
          </Box>
        )}

        {/* Summary Section */}
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Summary{' '}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {summarytext || 'No summary provided.'}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Meta Details */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mb: 3,
            fontSize: '0.95rem',
          }}
        >
          <Typography>
            <strong>Category:</strong> {category?.name || 'N/A'}
          </Typography>
          <Typography>
            <strong>Type:</strong> {contenttype || 'N/A'}
          </Typography>
        </Box>

        {/* Tags */}
        {tags?.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tags.map((tag) => (
                <Chip
                  key={tag.name}
                  label={tag.name}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </>
        )}
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ mt: 2 }}>
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
