import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Page from './components/Page.js'


function App() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;
