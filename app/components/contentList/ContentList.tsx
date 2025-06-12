'use client';
import React, { useState } from 'react';
import ContentCard from '../contentCard/ContentCard';
import ContentModal from '../contentModal/ContentModal';
import { Grid, Dialog } from '@mui/material';

/**
 * Renders a list of content items in a responsive grid layout.
 * Each item opens a modal with details when clicked.
 *
 * Props:
 * - content: Array of content items to display
 */

const ContentList = ({ content }) => {
  // state for modal
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function to open the modal
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };
  return (
    <>
      {/* Content Grid */}
      <Grid container spacing={4} sx={{ mb: 2 }}>
        {content.map((item) => (
          <Grid key={item.contentid} size={{ xs: 12, sm: 6, md: 4 }}>
            <ContentCard
              key={item.contentid}
              item={item}
              onClick={() => openModal(item)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Content Modal */}
      <Dialog open={isModalOpen} onClose={closeModal} maxWidth="md" fullWidth>
        {selectedItem && (
          <ContentModal selectedItem={selectedItem} closeModal={closeModal} />
        )}
      </Dialog>
    </>
  );
};

export default ContentList;
