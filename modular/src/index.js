import React, { Component } from 'react';
import { render } from 'react-dom';
import CityList from './CityList';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <CityList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
