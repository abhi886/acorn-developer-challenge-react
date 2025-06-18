'use client';
import React, { FC, useState } from 'react';
import ContentCard from '../contentCard/ContentCard';
import ContentModal from '../contentModal/ContentModal';
import { Grid, Dialog, Container } from '@mui/material';
import { ContentListProps } from './PropTypes';
import { CatalogueItem } from '@/app/types/catalogue';

/**
 * Renders a list of content items in a responsive grid layout.
 * Each item opens a modal with details when clicked.
 *
 * Props:
 * - content: Array of content items to display
 */

const ContentList: FC<ContentListProps> = ({ content }) => {
  // state for modal
  const [selectedItem, setSelectedItem] = useState<CatalogueItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // function to open the modal
  const openModal = (item: CatalogueItem) => {
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
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {content.map((item) => (
            <Grid key={item.contentid} size={{ xs: 12, sm: 6, md: 4 }}>
              <ContentCard
                key={item.contentid}
                item={item}
                onClick={() => openModal(item)}
                aria-label={`View details about ${item.fullname}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

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
