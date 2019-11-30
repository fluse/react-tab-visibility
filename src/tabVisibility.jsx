import React, { Component } from 'react'

export default class TabVisibility extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tabIsVisible: true,
            hiddenTime: 0
        }
        
        this.cycle = null
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
        document.removeEventListener(this.eventName, this.handleTabVisibility.bind(this))
    }

    handleTabVisibility(e) {

        const tabIsVisible = !e.target[this.eventKey]
        let hiddenTime = this.state.hiddenTime

        if (!tabIsVisible) {
            hiddenTime = 0
            this.cycle = setInterval(this.countHiddenTime.bind(this), 1000)
          }

        if (tabIsVisible && !!this.cycle) {
            clearInterval(this.cycle)
        }

        this.setState({ tabIsVisible, hiddenTime })

        this.onTabVisibilityChange({ tabIsVisible, hiddenTime })
    }
    
    countHiddenTime() {
        let hiddenTime = this.state.hiddenTime + 1
        this.setState({ hiddenTime })
    }

    onTabVisibilityChange(status) {}

    render() {
        return null
    }
}
