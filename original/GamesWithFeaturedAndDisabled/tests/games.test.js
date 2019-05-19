import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Games from '..';

describe('Games component', () => {
  it('renders the Games component with the list of games, some of them featured and some of them not available', () => {
    const games = [
      {
        id: 1,
        title: 'Red Dead Redemption 2',
        src: '...',
        link: '...',
        isFeatured: true,
      },
      {
        id: 2,
        title: 'Marvels Spiderman',
        src: '...',
        link: '...',
        isAvailable: true,
      }
    ];

    const renderer = new ShallowRenderer();
    const component = (
      <Games games={games} title="Test title" notAvailableDisclaimer="not available" />
    );
    expect(renderer.render(component)).toMatchSnapshot();
  });
});
