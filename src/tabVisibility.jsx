'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabVisibility extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIsVisible: true,
            hiddenTime: 0
        };

        this.eventName = null;
        this.eventKey = null;
    }

    componentDidMount() {
        const keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };

        for (let stateKey in keys) {
            if (stateKey in document) {
                this.eventKey = stateKey;
                this.eventName = keys[stateKey];
                break;
            }
        }

        document.addEventListener(this.eventName, this.handleTabVisibility.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener(this.eventName);
    }

    handleTabVisibility(e) {

        const tabIsVisible = !e.target[this.eventKey];

        if (!tabIsVisible) {
            this.cycle = setInterval(this.countHiddenTime.bind(this), 1000);
        }

        this.setState({ tabIsVisible });

        this.onTabVisibilityChange({
            tabIsVisible,
            hiddenTime: this.state.hiddenTime
        });

        if (tabIsVisible && this.cycle !== null) {
            clearInterval(this.cycle);
            this.setState({
                hiddenTime: 0
            });
        }
    }

    countHiddenTime() {
        let hiddenTime = this.state.hiddenTime;
        hiddenTime++;
        this.setState({ hiddenTime });
    }

    onTabVisibilityChange(status) {}

    render() {
        return null
    }
}

export default TabVisibility;
