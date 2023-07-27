import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// import { Container } from './styles';

interface ButtonCarrosselPros {
  icon: string,
  callback: () => void
}

const ButtonCarrossel = ({ icon, callback }: ButtonCarrosselPros) => {
  return (
    <button
        onClick={() =>
          setCurrentImageIndex(
            (currentImageIndex - 1 + images.length) % images.length
          )
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={icon} />
      </button>
  );
}

export default ButtonCarrossel;
