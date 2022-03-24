import './App.css';
import React from 'react';
import Home from './components/Loginpage/Home';
import HomeAdmin from './components/AdminPage/HomeAdmin';
import ProtectedRoute from "./components/protectedRoute/protectedRoute"
import Home2 from './components/detailsPage/Home2';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/customer' element={<Home2 />} />
          {/* <Route extract path='/adminhome' element={<HomeAdmin />} /> */}
          {/* <Route extract path='/home' element={<Home2 />} /> */}
        </Routes>
      </Router>
      {/* <ProtectedRoute extract path="/customer" component={<Home2 />} /> */}
    </>
  );
}

export default App;
