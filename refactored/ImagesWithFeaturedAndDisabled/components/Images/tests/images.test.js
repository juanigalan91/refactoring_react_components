import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Images from '..';
import images from '../../../../../data';

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
});
