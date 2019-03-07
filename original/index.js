import React from 'react';
import ReactDOM from 'react-dom';
import './original.scss';
import Images from './Images';
import ImagesWithFeaturedAndDisabled from './ImagesWithFeaturedAndDisabled';
import ImagesWithCounterClick from './ImagesWithCounterClick';
import images from '../data';

/* global document */
const root = document.getElementById('root');
const baseProps = {
    images,
    title: 'Best PS4 Games of 2018'
};

ReactDOM.render(
    [
        <Images
            key="images"
            {...baseProps}
        />,
        <ImagesWithFeaturedAndDisabled
            key="images-with-featured-and-disabled"
            {...baseProps}
            title="Featured PS4 Games of 2018"
            notAvailableDisclaimer="Not Available"
        />,
        <ImagesWithCounterClick
            key="images-with-counter-click"
            {...baseProps}
            title="Featured PS4 Games of 2018"
            notAvailableDisclaimer="Not Available"
        />
    ],
    root
);
