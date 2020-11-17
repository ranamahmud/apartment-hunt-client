import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails';
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import BookingList from './components/BookingList/BookingList/BookingList';
import AddRentHouse from './components/AddRentHouse/AddRentHouse/AddRentHouse';
import MyRent from './components/MyRent/MyRent/MyRent';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home-details/:id" component={HomeDetails} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <PrivateRoute path="/booking-list" component={BookingList} />
          <PrivateRoute path="/add-rent" component={AddRentHouse} />
          <PrivateRoute path="/my-rent" component={MyRent} />

        </Switch>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
