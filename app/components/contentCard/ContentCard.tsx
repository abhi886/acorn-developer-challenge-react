import React from 'react';
import Image from 'next/image';

const ContentCard = ({ item, onClick }) => {
  const { fullname, imageurl, summarytext } = item;

  return (
    <li onClick={() => onClick(item)}>
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
    </li>
  );
};

export default ContentCard;
