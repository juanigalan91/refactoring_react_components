import React from 'react';
import PropTypes from 'prop-types';

const namespace = 'images';
const Images = (props) => {
    const { images } = props;
    return (
        <div className={namespace}>
            {
                images.map(image => (
                    <a href={image.link} className={`${namespace}__link`}>
                        <img
                            src={image.src}
                            alt={image.title}
                            className={`${namespace}__img`}
                        />
                    </a>
                ))
            }
        </div>
    );
};

Images.propTypes = {
    images: PropTypes.array.isRequired
};

export default Images;
