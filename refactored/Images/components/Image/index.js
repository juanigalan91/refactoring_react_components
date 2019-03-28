import React from 'react';
import PropTypes from 'prop-types';

const namespace = 'image';
const Image = (props) => {
    const {
        key,
        link,
        src,
        title
    } = props;

    return (
        <li className={namespace} key={key}>
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
    key: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Image;
