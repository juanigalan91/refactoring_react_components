import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'image';
const Image = (props) => {
    const {
        link,
        src,
        isAvailable,
        isFeatured,
        notAvailableDisclaimer,
        id,
        title
    } = props;

    const className = classNames(namespace, {
        [`${namespace}__featured`]: isFeatured,
        [`${namespace}__not-available`]: !isAvailable,
    });

    return (
        <li className={className} key={id}>
            <a
                href={link}
                className={`${namespace}__link`}
                target="_blank"
                rel="noopener noreferrer"
                alt={title}
            >
                {
                    !isAvailable
                    && <span className={`${namespace}__not-available-disclaimer`}>{notAvailableDisclaimer}</span>
                }
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
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    isFeatured: PropTypes.bool.isRequired,
    notAvailableDisclaimer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Image;
