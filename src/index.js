import React from 'react'
import ReactDOM from 'react-dom'
import TabVisibility from './tabVisibility.jsx'

import css from './index.css';

class App extends TabVisibility {
    
    onTabVisibilityChange(state) {
        console.log(state)
    }
    
    render() {

        return (
            <section>
                <h1>Switch Browser Tab</h1>

                <p>Last inactivity duration in seconds: {this.state.hiddenTime}</p>
                
                <a href="https://github.com/fluse/react-tab-visibility" class="docu" target="_blank">Checkout Documentation</a>
                <a href="https://www.npmjs.com/package/react-tab-visibility" class="npm" target="_blank">NPM Package</a>

                <br />
                <br />

                <h2>Take a look at other Packages</h2>

                <a href="https://www.npmjs.com/package/react-scroll-bound" className="npm" target="_blank">react-scroll-bound</a>
            </section>
        )
    }
}

const app = document.querySelector("main");
app ? ReactDOM.render(<App />, app) : false;
