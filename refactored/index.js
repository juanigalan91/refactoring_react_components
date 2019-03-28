import React from 'react';
import ReactDOM from 'react-dom';
import './original.scss';
import Images from './Images';
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
        />
    ],
    root
);
