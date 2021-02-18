import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// Components
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="App">
      <h1>TradeTracker</h1>


      <Router>
        <Link to='/'>Dashboard</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/research'>Research</Link>
        <Route path='/' exact component={Dashboard} />


      </Router>


    </div>
  );
}

export default App;
