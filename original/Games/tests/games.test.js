import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Games from '..';
import games from '../../../data';

describe('Games component', () => {
  it('renders the games component with the list of games', () => {
    const renderer = new ShallowRenderer();
    const component = (
            <Games games={games} title="Test title" />
    );
    expect(renderer.render(component)).toMatchSnapshot();
  });
});
