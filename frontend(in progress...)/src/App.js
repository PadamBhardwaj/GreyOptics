import './App.css';
import React from 'react';
import Home from './components/Loginpage/Home';
import cutomerCreate from './components/Forms/cutomerCreate';
import OrderCreate from './components/Forms/OrderCreate';
import HomeAdmin from './components/AdminPage/HomeAdmin';
import ProtectedRoute from "./components/protectedRoute/protectedRoute"
import Home2 from './components/detailsPage/Home2';
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from './actions/clientAction';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <>
      <Router>
        <Switch>
          {/* <Routes> */}
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/customer' element={<Home2 />} /> */}
          {/* <Route exact path='/customer/*' element={<ProtectedRoute component={<Home2 />} />} /> */}
          {/* <Route extract path='/adminhome' element={<HomeAdmin />} /> */}
          {/* <Route extract path='/home' element={<Home2 />} /> */}
          <ProtectedRoute exact path="/customer" component={Home2} />
          <ProtectedRoute exact path="/customer/new" component={cutomerCreate} />
          <ProtectedRoute exact path="/customer/orders/new/:id" component={OrderCreate} />
          {/* </Routes> */}
        </Switch>
      </Router>
    </>
  );
}
export default App;
