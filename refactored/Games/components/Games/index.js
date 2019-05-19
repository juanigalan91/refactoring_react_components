import React from 'react';
import PropTypes from 'prop-types';
import Game from '../Game';

const namespace = 'games';
const Games = (props) => {
  const { games, title } = props;
  return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>{title}</h1>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    games.map(image => <li><Game {...image} key={image.id} /></li>)
                }
            </ul>
        </div>
  );
};

Games.propTypes = {
  games: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Games;
