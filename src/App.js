import './App.css';
import React from 'react';
import LeftNav from './components/left-nav';
import Pages from './components/pages';

function App() {
  return (
    <div className="App">
      <LeftNav />
      <Pages />
    </div>
  );
}

export default App;
