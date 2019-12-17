// Test away


import React from 'react';
import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react';

import Dashboard from './Dashboard';


/*
    Testing to see that:
        1) the Dashboard component shows the controls and display - done
        2) the Gate defaults to unlocked and open - done
        3) the Gate cannot be closed or opened if it is locked
*/

describe('<Dashboard />', () => {

    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render the Controls component', () => {
        const wrapper = rtl.render(<Dashboard />);
        const controlsNode = wrapper.getByTestId('controls-component');

        expect(controlsNode).toBeTruthy()
    })

    it('should render the Display component', () => {
        const wrapper = rtl.render(<Dashboard />);
        const displayNode = wrapper.getByTestId('display-component');

        expect(displayNode).toBeTruthy();
    })

    it('should by default be Open', () => {
        const wrapper = rtl.render(<Dashboard />);
        const gateStatusNode = wrapper.getByTestId('gate-status-display');
        expect(gateStatusNode.textContent).toBe("Open");
    })

    it('should by default be Unlocked', () => {
        const wrapper = rtl.render(<Dashboard />);
        const gateLockStatusNode = wrapper.getByTestId('gate-lock-status-display');
        expect(gateLockStatusNode.textContent).toBe("Unlocked");
    })

    it('should have the Closed/Open button disabled if the gate is locked', () => {

        const wrapper = rtl.render(<Dashboard />);
        const lockButtonNode = wrapper.getByText('Lock Gate');
        const toggleGateNode = wrapper.getByTestId('toggle-open-close');

        if (lockButtonNode.disabled) {
            expect(toggleGateNode.disabled).toEqual(false);
        } else {
            expect(toggleGateNode.disabled).toEqual(true);
        };
    });

    it('should render a button Close Gate by default', () => {
        const wrapper = rtl.render(<Dashboard />);
        const toggleButtonNode = wrapper.getByTestId('toggle-open-close');

        expect(toggleButtonNode.type).toBe("submit");
        expect(toggleButtonNode.nodeName).toBe("BUTTON");
        expect(toggleButtonNode.textContent).toBe("Close Gate");
    })
})


