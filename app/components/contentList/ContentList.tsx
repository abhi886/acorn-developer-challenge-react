'use client';
import React, { useState } from 'react';
import ContentCard from '../contentCard/ContentCard';
import ContentModal from '../contentModal/ContentModal';

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
      <ul>
        {content.map((item) => (
          <ContentCard
            key={item.contentid}
            item={item}
            onClick={() => openModal(item)}
          />
        ))}
      </ul>
      {/* Modal */}
      {isModalOpen && (
        <ContentModal selectedItem={selectedItem} closeModal={closeModal} />
      )}
    </>
  );
};

export default ContentList;
