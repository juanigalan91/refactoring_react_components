import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const namespace = 'images';
const Images = (props) => {
  const { images, title } = props;
  return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>{title}</h1>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    images.map(image => <Image {...image} key={image.id} />)
                }
            </ul>
        </div>
  );
};

Images.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Images;
