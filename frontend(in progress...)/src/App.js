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
import ClientCreate from './components/Forms/clientCreate';
import { loadUser } from './actions/clientAction';
import { useEffect } from 'react';
import redirect from './components/AdminUserRedirect/redirect';
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path="/customer" component={Home2} />
          <ProtectedRoute exact path="/redirect" component={redirect} />
          <ProtectedRoute exact path="/customer/new" component={cutomerCreate} />
          <ProtectedRoute exact path="/clients/register" component={ClientCreate} />
          <ProtectedRoute exact path="/admin" component={HomeAdmin} />
          <ProtectedRoute exact path="/customer/orders/new/:id" component={OrderCreate} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
