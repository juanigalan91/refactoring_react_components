import React from 'react';
import ReactDOM from 'react-dom';
import './original.scss';
import Images from './Images';

/* global document */
const root = document.getElementById('root');
const images = [
    {
        title: 'Red Dead Redemption 2',
        src: 'https://m.media-amazon.com/images/I/81z80lFufgL._AC_UL872_FMwebp_QL65_.jpg',
        link: 'https://www.amazon.com/Red-Dead-Redemption-2-PlayStation-4/dp/B01M5DZ525/ref=sr_1_3?keywords=ps4+games&qid=1551459125&s=gateway&sr=8-3'
    }
];

ReactDOM.render(<Images images={images} />, root);
