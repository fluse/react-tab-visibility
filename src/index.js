import React from 'react'
import ReactDOM from 'react-dom'
import TabVisibility from './tabVisibility.jsx'

class App extends TabVisibility {
    
    onTabVisibilityChange(state) {
        console.log(state)
    }
    
    render() {

        return (
            <div>
                Test
            </div>
        )
    }
}

const app = document.querySelector("main");
app ? ReactDOM.render(<App />, app) : false;
