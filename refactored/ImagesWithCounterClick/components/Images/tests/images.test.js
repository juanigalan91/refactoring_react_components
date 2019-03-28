import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Images from '..';
import images from '../../../../../data';

afterEach(cleanup);

const component = (
    <Images
        images={images}
        title="Test title"
        notAvailableDisclaimer="not available"
    />
);

describe('Images component', () => {
  it('renders the images component with the list of images', () => {
    const renderer = new ShallowRenderer();
    expect(renderer.render(component)).toMatchSnapshot();
  });

  it('executes the tracking hook when the image is clicked and adds to visits', () => {
    const { getByAltText, container } = render(component);

    const textEl = getByAltText('Red Dead Redemption 2');
    fireEvent.click(textEl);

    const visits = container.querySelector('.images__visits');
    expect(visits.textContent).toBe('Visits:1');
  });

  it('does not execute hook since item is not available', () => {
    const { getByAltText, container } = render(component);

    const textEl = getByAltText('Assassins creed Odyssey');
    fireEvent.click(textEl);

    const visits = container.querySelector('.images__visits');
    expect(visits.textContent).toBe('Visits:0');
  });
});
