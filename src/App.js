import React, { Component } from 'react';

import Header from './components/header/Header';
import Company from './components/company/Company';
import Counter from './components/counter/Counter';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Company />
                <Counter />
                <Footer />
            </div>
        );
    }
}

export default App;
