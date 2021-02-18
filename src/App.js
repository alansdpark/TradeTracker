import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// Components
import Dashboard from './components/Dashboard.js';
import Calendar from './components/Calendar.js';
import Research from './components/Research.js';
function App() {
  return (
    <div className="App">

      <Router>
        <h1>TradeTracker</h1>
        <Link to='/'>Dashboard</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/research'>Research</Link>
        <Route path='/' exact component={Dashboard} />
        <Route path='/calendar' exact component={Calendar} />
        <Route path='/research' exact component={Research} />


      </Router>
    </div>
  );
}

export default App;
