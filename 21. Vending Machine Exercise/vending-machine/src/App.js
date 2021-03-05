import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom'
import Candy from './Candy';
import Chips from './Chips';
import Soda from './Soda';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <nav className='Navbar'>
        <NavLink exact className='Navbar-active' to='/'>
          Home
        </NavLink>
        <NavLink exact className='Navbar-active' to='/soda'>
          Soda
        </NavLink>
        <NavLink exact className='Navbar-active' to='/chips'>
          Chips
        </NavLink>
        <NavLink exact className='Navbar-active' to='/candy'>
          Candy
        </NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/soda' component={Soda}/>
        <Route exact path='/chips' component={Chips}/>
        <Route exact path='/candy' component={Candy}/>
      </Switch>
    </div>
  );
}

export default App;
