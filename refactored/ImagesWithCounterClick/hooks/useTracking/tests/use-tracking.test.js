import React from 'react';
import useTracking from '..';
import { render, cleanup, fireEvent } from 'react-testing-library';

const CounterComponent = () => {
    const [count, track] = useTracking('This was clicked');

    return (
        <div>
            <p id="counts">
                {`You clicked ${count} times`}
            </p>
            <button type="button" onClick={track}>
                Click me
            </button>
        </div>
    );
};

afterEach(cleanup);

describe('Use tracking hook', () => {
    it('tracks the click executed', () => {
        const { container } = render(<CounterComponent />);

        const button = container.querySelector('button');
        const label = container.querySelector('#counts');
        expect(label.textContent).toBe('You clicked 0 times');

        fireEvent.click(button);
        expect(label.textContent).toBe('You clicked 1 times');
    });
});
