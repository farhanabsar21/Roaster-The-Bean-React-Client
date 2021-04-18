import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Payment from './Components/User/Payment/Payment';
import AddReviews from './Components/User/AddReviews/AddReviews';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import AddService from './Components/Admin/AddService/AddService';
import AllOrders from './Components/Admin/AllOrders/AllOrders';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import ManageOrder from './Components/Admin/ManageOrder/ManageOrder';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/login"><Login></Login></Route>
            <PrivateRoute path="/admin/allOrders"><AllOrders></AllOrders></PrivateRoute>
            <PrivateRoute path="/admin/addAdmin"><AddAdmin></AddAdmin></PrivateRoute>
            <PrivateRoute path="/admin/addService"><AddService></AddService></PrivateRoute>
            <PrivateRoute path="/admin/manageOrder"><ManageOrder></ManageOrder></PrivateRoute>
            <PrivateRoute path="/user/userOrders"><User></User></PrivateRoute>
            <PrivateRoute path="/user/review"><AddReviews></AddReviews></PrivateRoute>
            <PrivateRoute path="/user/payment/:serviceId"><Payment></Payment></PrivateRoute>
            <Route exact path="/"><Home></Home></Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
