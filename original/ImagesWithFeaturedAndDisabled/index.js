import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'images';
const Images = (props) => {
    const { images, title } = props;
    return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>{title}</h1>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    images.map((image) => {
                        const baseClassName = 'image';
                        const className = classNames(baseClassName, {
                            [`${baseClassName}__featured`]: image.isFeatured,
                            [`${baseClassName}__disabled`]: image.isDisabled,
                        });

                        return (
                            <li className={className} key={image.key}>
                                <a href={image.link} className={`${baseClassName}__link`} target="_blank" rel="noopener noreferrer">
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
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default Images;
