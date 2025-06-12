import React from 'react';
import ContentCard from '../contentCard/ContentCard';

const ContentList = ({ content }) => {
  return (
    <ul>
      {content.map((item) => (
        <ContentCard key={item.contentid} item={item} />
      ))}
    </ul>
  );
};

export default ContentList;
