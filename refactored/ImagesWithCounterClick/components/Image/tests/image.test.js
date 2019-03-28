import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Image from '..';

describe('Image component', () => {
    it('renders the images component with the list of images', () => {
        const renderer = new ShallowRenderer();
        const image = {
            key: 1,
            title: 'Red Dead Redemption 2',
            src: 'https://m.media-amazon.com/images/I/81z80lFufgL._AC_UL872_FMwebp_QL65_.jpg',
            link: 'https://www.amazon.com/Red-Dead-Redemption-2-PlayStation-4/dp/B01M5DZ525/ref=sr_1_3?keywords=ps4+games&qid=1551459125&s=gateway&sr=8-3',
            isFeatured: true,
            isAvailable: true
        };

        const component = (
            <Image {...image} />
        );

        expect(renderer.render(component)).toMatchSnapshot();
    });
});
