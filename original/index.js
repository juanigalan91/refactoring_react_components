import React from 'react';
import ReactDOM from 'react-dom';
import './original.scss';
import Images from './Images';
import ImagesWithFeaturedAndDisabled from './ImagesWithFeaturedAndDisabled';

/* global document */
const root = document.getElementById('root');
const images = [
    {
        key: 1,
        title: 'Red Dead Redemption 2',
        src: 'https://m.media-amazon.com/images/I/81z80lFufgL._AC_UL872_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.com/Red-Dead-Redemption-2-PlayStation-4/dp/B01M5DZ525/ref=sr_1_3?keywords=ps4+games&qid=1551459125&s=gateway&sr=8-3',
        isFeatured: true,
        isAvailable: true
    },
    {
        key: 2,
        title: 'Marvels Spiderman',
        src: 'https://m.media-amazon.com/images/I/81d6JU6g1pL._AC_UL872_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.com/Marvels-Spider-Man-PlayStation-4/dp/B01GW8YDLK/ref=sr_1_4?keywords=ps4+games&qid=1551459125&s=gateway&sr=8-4',
        isAvailable: false
    },
    {
        key: 3,
        title: 'God of war',
        src: 'https://m.media-amazon.com/images/I/51po2bu7VnL._AC_UL872_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.com/Marvels-Spider-Man-PlayStation-4/dp/B01GW8YDLK/ref=sr_1_4?keywords=ps4+games&qid=1551459125&s=gateway&sr=8-4',
        isFeatured: true,
        isAvailable: true
    },
    {
        key: 4,
        title: 'Assassins creed Odyssey',
        src: 'https://m.media-amazon.com/images/I/81da48KsFpL._AC_UL872_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.com/Assassins-Creed-Odyssey-PlayStation-4-Standard/dp/B07DKYN13M/ref=sr_1_5?keywords=ps4+games&qid=1551460416&s=gateway&sr=8-5',
        isAvailable: false
    }
];

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
        />
    ],
    root
);
