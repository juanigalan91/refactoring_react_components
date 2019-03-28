import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Image from '..';

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

describe('Image component', () => {
  it('renders a simple image component', () => {
    const renderer = new ShallowRenderer();

    const component = (
            <Image {...image} />
    );

    expect(renderer.render(component)).toMatchSnapshot();
  });

  it('renders a simple image component that is not featured', () => {
    const renderer = new ShallowRenderer();

    const component = (
            <Image {...image} isFeatured={false} />
    );

    expect(renderer.render(component)).toMatchSnapshot();
  });

  it('renders a simple image component that is not available', () => {
    const renderer = new ShallowRenderer();

    const component = (
            <Image {...image} isAvailable={false} />
    );

    expect(renderer.render(component)).toMatchSnapshot();
  });
});
