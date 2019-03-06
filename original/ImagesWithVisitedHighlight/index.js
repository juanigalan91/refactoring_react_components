import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'images';

const useTracking = () => {
    const [count, setCount] = useState(0);

    const track = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    console.log(`Items carousel was clicked ${count} times.`);

    return track;
};

const Images = (props) => {
    const { images, title, notAvailableDisclaimer } = props;
    const track = useTracking();

    return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>{title}</h1>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    images.map((image) => {
                        const handleClick = () => {
                            if (image.isAvailable) {
                                console.log(`Image clicked was #${image.key}`);
                                track();
                            }
                        };
                        const baseClassName = 'image';
                        const className = classNames(baseClassName, {
                            [`${baseClassName}__featured`]: image.isFeatured,
                            [`${baseClassName}__not-available`]: !image.isAvailable,
                        });

                        return (
                            <li className={className} key={image.key}>
                                <a
                                    href={image.link}
                                    className={`${baseClassName}__link`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleClick}
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
