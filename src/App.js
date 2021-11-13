// import { NotFound } from '../src/Pages/NotFound/NotFound';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';


import Home from './Pages/Home/Home/Home';
import Login from './Pages/LogIn/Login/Login';
import Error from './Pages/NotFound/Erro.';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
           <Login></Login>
          </Route>
          <Route path='/booking/:serviceid'>
        <Booking></Booking>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
