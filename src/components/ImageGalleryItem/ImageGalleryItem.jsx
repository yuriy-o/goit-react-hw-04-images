// import { useState } from 'react';
import { useToggle } from 'react-use';
import { PropTypes } from 'prop-types';

import { Modal } from 'components/Modal/Modal';

import {
  ImageGalleryCards,
  ImageGalleryImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  //   const handleCloseModal = () => {
  //     setIsModalVisible(false);
  //   };

  //   const handleOpenModal = () => {
  //     setIsModalVisible(true);
  //   };

  const [on, toggle] = useToggle(true);

  return (
    <ImageGalleryCards>
      {!on && (
        <Modal largeImageURL={largeImageURL} tags={tags} handleClose={toggle} />
      )}
      <ImageGalleryImage src={webformatURL} alt={tags} onClick={toggle} />
    </ImageGalleryCards>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
