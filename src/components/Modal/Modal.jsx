import PropTypes from 'prop-types';
import { ModalWindow, Overlay } from 'components/Modal/Modal.styled';
import { useEffect } from 'react';

export const Modal = ({ largeImageURL, tags, handleClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      handleClose();
    }
  };

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleClose();
    }

    // handleClose();  //! Без `умови ↑↑ модалка також буде закриватись при кліку на картинку
  };

  return (
    <Overlay onClick={onBackdropClick}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
