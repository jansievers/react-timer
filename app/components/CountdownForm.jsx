const React = require('react');

const CountdownForm = React.createClass({
    onSubmit: function(e) {
      e.preventDefault();
      console.log('this.refs.seconds.value', this.refs.seconds.value);
      if (this.refs.seconds.value.length === 0) {
          return false;
      }
      let stringSeconds = this.refs.seconds.value;
      if (stringSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(stringSeconds, 10));
      }
    },
    render: function() {
      return (
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
              <input type="text" ref="seconds" placeholder="Enter seconds"/>
              <button className="button expanded">Start</button>
          </form>
        </div>
      );
    }
});

module.exports = CountdownForm;
