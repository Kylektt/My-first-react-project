import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } 
from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' exact Component={Home} />
          <Route path = '/services' exact Component={Services} />
          <Route path = '/products' exact Component={Products} />
          <Route path = '/sign-up' exact Component={SignUp} />
        </Routes>
      </Router>
    </>
 
  );
}

export default App;
