const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            const $el = $(ReactDOM.findDOMNode(controls));
            const $pauseButton = $el.find('#btnPause');

            expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
            const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            const $el = $(ReactDOM.findDOMNode(controls));
            const $startButton = $el.find('#btnStart');

            expect($startButton.length).toBe(1);
        });
    });
});
