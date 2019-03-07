import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Images from '..';
import images from '../../../data';

describe('Images component', () => {
    it('renders the images component with the list of images', () => {
        const renderer = new ShallowRenderer();
        const component = (
            <Images images={images} title="Test title" />
        );
        expect(renderer.render(component)).toMatchSnapshot();
    });
});
