import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import RootRoutes from './RootRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <RootRoutes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
