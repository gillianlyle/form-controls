import React from 'react';
import { Input, Dropdown } from './components/FormFields.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h3>Example of Dropdown</h3>
      <div className="section">
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
