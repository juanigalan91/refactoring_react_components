import React from 'react';
import ReactDOM from 'react-dom';
import './original.scss';
import Games from './Games';
import GamesWithFeaturedAndDisabled from './GamesWithFeaturedAndDisabled';
import GaemsWithCounterClick from './GamesWithCounterClick';
import games from '../data';

/* global document */
const root = document.getElementById('root');
const baseProps = {
  games,
  title: 'Best PS4 Games of 2018'
};

ReactDOM.render(
  [
        <Games
            key="games"
            {...baseProps}
        />,
        <GamesWithFeaturedAndDisabled
            key="games-with-featured-and-disabled"
            {...baseProps}
            title="Featured PS4 Games of 2018"
            notAvailableDisclaimer="Not Available"
        />,
        <GaemsWithCounterClick
            key="games-with-counter-click"
            {...baseProps}
            title="Featured PS4 Games of 2018"
            notAvailableDisclaimer="Not Available"
        />
  ],
  root
);
