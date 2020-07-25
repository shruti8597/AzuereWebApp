import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!!</h1>
        <h2>Welcome to your First React App..!</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
