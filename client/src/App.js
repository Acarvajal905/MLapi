import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Page from './components/Page'


function App() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;
