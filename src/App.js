import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import RootRoutes from './RootRoutes';
import reducer from './redux';

const store = createStore(reducer, {}, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <RootRoutes />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
