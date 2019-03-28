import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import useTracking from '../../hooks/useTracking';

const namespace = 'images';
const Images = (props) => {
    const { images, title, notAvailableDisclaimer } = props;
    const [count, track] = useTracking('Times the image carousel was clicked:');

    return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>
                {title}
            </h1>
            <span className={`${namespace}__visits`}>
                Visits:
                {count}
            </span>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    images.map(
                        image => <Image {...image} track={track} notAvailableDisclaimer={notAvailableDisclaimer} key={image.id} />
                    )
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
