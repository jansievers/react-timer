const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format Seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });

  describe('format Seconds when less than 10', () => {
    it('should format Seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock/>);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
