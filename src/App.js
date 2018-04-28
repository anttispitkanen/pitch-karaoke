import React, { Component } from 'react';

import Header from './components/header/Header';
import Counter from './components/counter/Counter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Counter />
            </div>
        );
    }
}

export default App;
