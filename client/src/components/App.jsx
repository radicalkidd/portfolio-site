import React, { Component } from 'react';
import Profile from './Profile.jsx';
import Projects from './Projects.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Projects />
      </div>
    );
  }
}

export default App;