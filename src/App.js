import logo from './logo.svg';
import './App.css';
import SayHello from './components/header'
import Footer from './components/footer'
import React from 'react'

function App() {
  return (
    <React.Fragment>
        <SayHello />
        <Footer />
    </React.Fragment>
  );
}

export default App;
