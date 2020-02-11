import React from 'react';
import { Dropdown, Checkbox } from './components/FormFields.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h3>Example of Dropdown</h3>
      <div className="section">
        <Dropdown />
      </div>

      <h3>Example of Checkbox</h3>
      <div className="section">
        <Checkbox />
      </div>
    </div>
  );
}

export default App;
