import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'games';
const Games = (props) => {
  const { games, title, notAvailableDisclaimer } = props;
  return (
    <div className={namespace}>
      <h1 key="title" className={`${namespace}__title`}>{title}</h1>
      <ul key={namespace} className={`${namespace}__list`}>
        {
          games.map((game) => {
            const baseClassName = 'game';
            const className = classNames(baseClassName, {
              [`${baseClassName}__featured`]: game.isFeatured,
              [`${baseClassName}__not-available`]: !game.isAvailable,
            });

            return (
              <li className={className} key={game.id}>
                <a
                  href={game.link}
                  className={`${baseClassName}__link`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!game.isAvailable) e.preventDefault();
                  }}
                >
                  {
                    !game.isAvailable
                    && <span className={`${baseClassName}__not-available-disclaimer`}>{notAvailableDisclaimer}</span>
                  }
                  <img
                    src={game.src}
                    alt={game.title}
                    className={`${baseClassName}__img`}
                  />
                  <h3 className={`${baseClassName}__img_title`}>{game.title}</h3>
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Games.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
  notAvailableDisclaimer: PropTypes.string.isRequired
};

export default Games;
