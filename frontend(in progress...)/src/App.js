import './App.css';
import React from 'react';
import Home from './components/Loginpage/Home';
import Home2 from './components/detailsPage/Home2';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route extract path='/' element={<Home />} />
        {/* <Route extract path='/home' element={<Home2 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
