import React from 'react';
import TimePicker from 'react-times';

class TimePickerFour extends React.Component {
    constructor(props) {
        super(props);
        const {  meridiem, focused, showTimezone, timezone } = props;
        let hour = '';
        let minute = '';
        this.state = {
            hour,
            minute,
            meridiem,
            focused,
            timezone,
            showTimezone,
        };

        this.onFocusChange = this.onFocusChange.bind(this);
        this.onFocusChange1 = this.onFocusChange1.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.handleFocusedChange = this.handleFocusedChange.bind(this);
    }

    onTimeChange(options) {
        const {
            hour,
            minute,
            meridiem
        } = options;

        this.setState({ hour, minute, meridiem });
    }

    onFocusChange(focused) {
        this.setState({ focused });
    }
    onFocusChange1(focused1) {
        this.setState({ focused1 });
    }

    handleFocusedChange() {
        const { focused } = this.state;
        this.setState({ focused: !focused });
    }

    get basicTrigger() {
        const { hour, minute } = this.state;
        return (
            <div
                onClick={this.handleFocusedChange}
                className="time_picker_trigger"
            >
                <div>
                    {"Click to open panel"}<br />
                    {hour}:{minute}
                </div>
            </div>
        );
    }

    get customTrigger() {
        return (
            <div
                onClick={this.handleFocusedChange}
                className="time_picker_trigger"
            >
            </div>
        );
    }

    get trigger() {
        const { customTriggerId } = this.props;
        const triggers = {
            0: (<div />),
            1: this.basicTrigger,
            2: this.customTrigger
        };
        return triggers[customTriggerId] || null;
    }

    render() {
        const {
            hour,
            minute,
        } = this.state;

        return (
            <div className="time_picker_wrapper">
                <TimePicker
                    trigger={this.trigger}
                    focused={false}
                    colorPalette="light"
                    onFocusChange={this.onFocusChange}
                    theme="classic"
                    onTimeChange={this.onTimeChange}
                    showTimezone={true}
                    time={hour && minute ? `${hour}:${minute}` : null}
                />
            </div>
        );
    }
}

export default TimePickerFour;
