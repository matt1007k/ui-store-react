import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalErrorViews from './views/GlobalErrorViews';



class App extends Component {
  render() {
    return (
      <Router>
          <Route component={GlobalErrorViews} />
      </Router>
    )
  }
}

export default App;






