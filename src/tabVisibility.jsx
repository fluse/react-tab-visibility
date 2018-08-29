'use strict';

import React, { Component } from 'react'

export default class TabVisibility extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tabIsVisible: true
        }

        this.eventName = null
        this.eventKey = null
    }

    componentDidMount() {

        const keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        }

        for (let stateKey in keys) {
            if (stateKey in document) {
                this.eventKey = stateKey
                this.eventName = keys[stateKey]
                break
            }
        }

        document.addEventListener(this.eventName, this.handleTabVisibility.bind(this))
    }

    componentWillUnmount() {
        document.removeEventListener(this.eventName)
    }

    handleTabVisibility(e) {

        const tabIsVisible = !e.target[this.eventKey]

        this.setState({ tabIsVisible })

        this.onTabVisibilityChange({ tabIsVisible })
    }

    onTabVisibilityChange(status) {}

    render() {
        return null
    }
}
