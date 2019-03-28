import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Image from '..';
import { render, cleanup, fireEvent } from 'react-testing-library';

afterEach(() => {
    cleanup();
});

const image = {
    id: 1,
    title: 'Red Dead Redemption 2',
    src: 'https://m.media-amazon.com/images/I/81z80lFufgL._AC_UL872_FMwebp_QL65_.jpg',
    link: 'https://www.amazon.com/Red-Dead-Redemption-2-PlayStation-4/dp/B01M5DZ525/ref=sr_1_3?keywords=ps4+games&qid=1551459125&s=gateway&sr=8-3',
    isFeatured: true,
    isAvailable: true,
    notAvailableDisclaimer: 'Not Available',
    track: jest.fn()
};

const component = (
    <Image {...image} />
);

describe('Image component', () => {
    it('renders a simple image component', () => {
        const renderer = new ShallowRenderer();

        expect(renderer.render(component)).toMatchSnapshot();
    });

    it('invokes track function since the image is available', () => {
        const { container } = render(component);

        const link = container.querySelector('.image__link');
        fireEvent.click(link);

        expect(image.track).toBeCalled();
    });

    it('does not invoke track function since the image is not available', () => {
        const notCalledTrack = jest.fn();
        const { container } = render(<Image {...image} isAvailable={false} track={notCalledTrack} />);

        const link = container.querySelector('.image__link');
        fireEvent.click(link);

        expect(notCalledTrack).not.toBeCalled();
    });
});
