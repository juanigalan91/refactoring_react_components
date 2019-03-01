import React from 'react';
import PropTypes from 'prop-types';

const namespace = 'images';
const Images = (props) => {
    const { images } = props;
    return (
        <ul className={namespace}>
            {
                images.map(image => (
                    <li className="image">
                        <a href={image.link} className={`${namespace}__link`}>
                            <img
                                src={image.src}
                                alt={image.title}
                                className={`${namespace}__img`}
                            />
                        </a>
                    </li>
                ))
            }
        </ul>
    );
};

Images.propTypes = {
    images: PropTypes.array.isRequired
};

export default Images;
