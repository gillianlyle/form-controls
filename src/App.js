import React from 'react';
import { Dropdown, Checkbox, MultipleChoice, Signature } from './components/FormFields.jsx';
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

      <h3>Example of Multiple Choice</h3>
      <div className="section">
        <MultipleChoice />
      </div>

      <h3>Example of Signature</h3>
      <div className="section">
        <Signature />
      </div>
    </div>
  );
}

export default App;
