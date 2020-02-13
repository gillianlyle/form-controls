import React from 'react';
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';
import MultipleChoice from './components/MultipleChoice';
import Signature from './components/Signature';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h3>Example of Dropdown Control</h3>
      <div className="section">
        <Dropdown />
      </div>

      <h3>Example of Checkbox Control</h3>
      <div className="section">
        <Checkbox />
      </div>

      <h3>Example of Multiple Choice Control</h3>
      <div className="section">
        <MultipleChoice />
      </div>

      <h3>Example of Signature Control</h3>
      <div className="section">
        <Signature />
      </div>
    </div>
  );
}

export default App;
