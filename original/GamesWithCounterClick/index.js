/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const namespace = 'games';

const useTracking = (message) => {
  const [count, setCount] = useState(0);

  const track = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  console.log(message, count);

  return [count, track];
};

const Games = (props) => {
  const { games, title, notAvailableDisclaimer } = props;
  const [count, track] = useTracking('Times the game carousel was clicked:');

  return (
        <div className={namespace}>
            <h1 key="title" className={`${namespace}__title`}>
                {title}
            </h1>
            <span className={`${namespace}__visits`}>Visits: {count}</span>
            <ul key={namespace} className={`${namespace}__list`}>
                {
                    games.map((game) => {
                      const handleClick = (e) => {
                        if (game.isAvailable) {
                          console.log(`Gamme clicked was #${game.key}`);
                          track();
                        } else {
                          e.preventDefault();
                        }
                      };
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
                                    onClick={handleClick}
                                    alt={game.title}
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
