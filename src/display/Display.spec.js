// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react';

import Display from "./Display";

/*
    Testing to see that:
        1) the Display component displays "Closed" if the closed prop is true and "Open" otherwise -
        2) it displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise - done
        3) when locked or closed, use the red-led class -
        4) when unlocked or open, use the green-led class -
*/

describe('<Display />', () => {

    it('should match snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should display Locked if the locked prop is true', () => {
        let locked = true;
        const wrapper = rtl.render(<Display locked={locked}/>);
        const gateLockStatusNode = wrapper.getByTestId('gate-lock-status-display');

        expect(gateLockStatusNode.textContent).toBe("Locked");
    })

    it('should display Unlocked if the locked prop is false', () => {
        let locked = false;
        const wrapper = rtl.render(<Display locked={locked}/>);
        const gateLockStatusNode = wrapper.getByTestId('gate-lock-status-display');

        expect(gateLockStatusNode.textContent).toBe("Unlocked");
    })

    it('should display Closed if the closed prop is true', () => {
        let closed = true;
        const wrapper = rtl.render(<Display closed={closed} />);
        let gateStatusNode = wrapper.getByTestId('gate-status-display');

        expect(gateStatusNode.textContent).toBe("Closed");
    })


})
