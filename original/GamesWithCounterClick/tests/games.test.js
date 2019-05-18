import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Games from '..';
import games from '../../../data';

afterEach(cleanup);

const component = (
    <Games
        images={games}
        title="Test title"
        notAvailableDisclaimer="not available"
    />
);

describe('Games component', () => {
  it('renders the Games component with the list of Games', () => {
    const renderer = new ShallowRenderer();
    expect(renderer.render(component)).toMatchSnapshot();
  });

  it('executes the tracking hook when the game is clicked and adds to visits', () => {
    const { getByAltText, container } = render(component);

    const textEl = getByAltText('Red Dead Redemption 2');
    fireEvent.click(textEl);

    const visits = container.querySelector('.games__visits');
    expect(visits.textContent).toBe('Visits: 1');
  });

  it('does not execute hook since item is not available', () => {
    const { getByAltText, container } = render(component);

    const textEl = getByAltText('Assassins creed Odyssey');
    fireEvent.click(textEl);

    const visits = container.querySelector('.games__visits');
    expect(visits.textContent).toBe('Visits: 0');
  });
});
