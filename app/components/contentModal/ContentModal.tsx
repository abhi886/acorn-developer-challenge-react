import Image from 'next/image';

const ContentModal = ({ selectedItem, closeModal }) => {
  if (!selectedItem) return null;
  const {
    summarytext,
    description,
    category,
    contenttype,
    tags,
    fullname,
    imageurl,
  } = selectedItem;
  return (
    <div id="modal" onClick={closeModal}>
      <div>
        <button onClick={closeModal}>✖</button>
        <h2>{fullname}</h2>
        {imageurl ? (
          <Image src={imageurl} alt={fullname} width={300} height={180} />
        ) : (
          ''
        )}
        <p>
          <strong>Summary:</strong> {summarytext}
        </p>
        <p>
          <strong>Description:</strong> {description || 'N/A'}
        </p>
        <p>
          <strong>Category:</strong> {category?.name}
        </p>
        <p>
          <strong>Type:</strong> {contenttype}
        </p>
        <p>
          <strong>Tags:</strong> {tags.map((t) => t.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default ContentModal;
