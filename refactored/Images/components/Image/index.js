import React from 'react';
import PropTypes from 'prop-types';

const namespace = 'image';
const Image = (props) => {
    const {
        link,
        id,
        src,
        title
    } = props;

    return (
        <li className={namespace} key={id}>
            <a href={link} className={`${namespace}__link`} target="_blank" rel="noopener noreferrer">
                <img
                    src={src}
                    alt={title}
                    className={`${namespace}__img`}
                />
                <h3 className={`${namespace}__img_title`}>{title}</h3>
            </a>
        </li>
    );
};

Image.propTypes = {
    link: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Image;
