import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'images';
const Images = (props) => {
  const { images, title, notAvailableDisclaimer } = props;
  return (
    <div className={namespace}>
      <h1 key="title" className={`${namespace}__title`}>{title}</h1>
      <ul key={namespace} className={`${namespace}__list`}>
        {
          images.map((image) => {
            const baseClassName = 'image';
            const className = classNames(baseClassName, {
              [`${baseClassName}__featured`]: image.isFeatured,
              [`${baseClassName}__not-available`]: !image.isAvailable,
            });

            return (
              <li className={className} key={image.id}>
                <a href={image.link} className={`${baseClassName}__link`} target="_blank" rel="noopener noreferrer">
                  {
                    !image.isAvailable
                    && <span className={`${baseClassName}__not-available-disclaimer`}>{notAvailableDisclaimer}</span>
                  }
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`${baseClassName}__img`}
                  />
                  <h3 className={`${baseClassName}__img_title`}>{image.title}</h3>
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
  notAvailableDisclaimer: PropTypes.string.isRequired
};

export default Images;
