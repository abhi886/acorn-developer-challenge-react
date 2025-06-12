import React from 'react';
import Image from 'next/image';

const ContentCard = ({ item }) => {
  const { fullname, imageurl, summarytext } = item;

  return (
    <li>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {imageurl ? (
          <Image src={imageurl} alt={fullname} width={300} height={180} />
        ) : (
          ''
        )}
        <h3>{fullname}</h3>
        <p>
          {summarytext.slice(0, 180)}
          {summarytext.length > 180 && '...'}
        </p>
      </a>
    </li>
  );
};

export default ContentCard;
