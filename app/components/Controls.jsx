const React = require('react');

const Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newState) {
        console.log(newState);
        return () => {
            this.props.onStatusChange(newState);
        }
    },
    render: function () {
        const {countdownStatus} = this.props;

        const renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button id="btnPause" className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button id="btnStart" className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;
