// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react';

import Display from "./Display";

/*
    Testing to see that:
        1) the Display component displays "Closed" if the closed prop is true and "Open" otherwise - done
        2) it displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise - done
        3) when locked or closed, use the red-led class - done
        4) when unlocked or open, use the green-led class - done
*/

describe('<Display />', () => {

    it('should match snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should display Closed if the closed prop is true', () => {
        let closed = true;
        const wrapper = rtl.render(<Display closed={closed} />);
        const gateStatusNode = wrapper.getByTestId('gate-status-display');

        expect(gateStatusNode.textContent).toBe("Closed");
    })

    it('should display Open if the closed prop is false', () => {
        let closed = false;
        const wrapper = rtl.render(<Display closed={closed} />);
        const gateStatusNode = wrapper.getByTestId('gate-status-display');

        expect(gateStatusNode.textContent).toBe("Open");

    })

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

    it('should use the red-led class if the gate is locked', () => {
        let locked=true;
        const wrapper = rtl.render(<Display locked={locked} />);
        const gateLockStatusNode = wrapper.getByTestId('gate-lock-status-display')

        expect(gateLockStatusNode.classList.contains('red-led')).toBeTruthy();
        expect(gateLockStatusNode.classList.contains('green-led')).toBeFalsy();
    })

    it('should use the red-led class if the gate is closed', () => {
        let closed=true;
        const wrapper = rtl.render(<Display closed={closed} />);
        const gateStatusNode = wrapper.getByTestId('gate-status-display')

        expect(gateStatusNode.classList.contains('red-led')).toBeTruthy()
        expect(gateStatusNode.classList.contains('green-led')).toBeFalsy()
    })

    it('should use the green-led class if the gate is unlocked', () => {
        let locked=false;
        const wrapper = rtl.render(<Display locked={locked} />);
        const gateLockStatusNode = wrapper.getByTestId('gate-lock-status-display')

        expect(gateLockStatusNode.classList.contains('green-led')).toBeTruthy()
        expect(gateLockStatusNode.classList.contains('red-led')).toBeFalsy();
    })

    it('should use the green-led class if the gate is open', () => {
        let closed=false;
        const wrapper = rtl.render(<Display closed={closed} />);
        const gateStatusNode = wrapper.getByTestId('gate-status-display')

        expect(gateStatusNode.classList.contains('green-led')).toBeTruthy()
        expect(gateStatusNode.classList.contains('red-led')).toBeFalsy()
    })




})
