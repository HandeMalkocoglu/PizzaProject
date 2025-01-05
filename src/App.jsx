import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import Home from './components/Home.jsx';
import OrderPizza from './components/OrderPizza.jsx';
import Success from './components/Success.jsx';

function App() {
  const [orderDetails, setOrderDetails] = useState(null);

  return (
    <Router>
      <AppContent handleSuccess={(details, history) => {
        setOrderDetails(details);
        history.push("/success");
      }} orderDetails={orderDetails} />
    </Router>
  );
}

function AppContent({ handleSuccess, orderDetails }) {
  const history = useHistory();

  return (
    <div data-cy="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order">
          <OrderPizza onSuccess={(details) => handleSuccess(details, history)} />
        </Route>
        <Route path="/success">
          <Success orderDetails={orderDetails} onBack={() => history.push("/")} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;