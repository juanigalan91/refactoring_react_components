/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'images';

const useTracking = (message) => {
    const [count, setCount] = useState(0);

    const track = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    console.log(message, count);

    return [count, track];
};

const Images = (props) => {
    const { images, title, notAvailableDisclaimer } = props;
    const [count, track] = useTracking('Times the image carousel was clicked:');

    return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>
                {title}
            </h1>
            <span className={`${namespace}__visits`}>Visits: {count}</span>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    images.map((image) => {
                        const handleClick = (e) => {
                            if (image.isAvailable) {
                                console.log(`Image clicked was #${image.key}`);
                                track();
                            } else {
                                e.preventDefault();
                            }
                        };
                        const baseClassName = 'image';
                        const className = classNames(baseClassName, {
                            [`${baseClassName}__featured`]: image.isFeatured,
                            [`${baseClassName}__not-available`]: !image.isAvailable,
                        });

                        return (
                            <li className={className} key={image.id}>
                                <a
                                    href={image.link}
                                    className={`${baseClassName}__link`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleClick}
                                    alt={image.title}
                                >
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
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    notAvailableDisclaimer: PropTypes.string.isRequired
};

export default Images;
