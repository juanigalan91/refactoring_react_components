import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Games from '..';
import games from '../../../data';

describe('Games component', () => {
  it('renders the Games component with the list of imGamesages', () => {
    const renderer = new ShallowRenderer();
    const component = (
            <Games games={games} title="Test title" notAvailableDisclaimer="not available" />
    );
    expect(renderer.render(component)).toMatchSnapshot();
  });
});
