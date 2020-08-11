import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import PageNavigation from '../src/components/PageNavigation';
import HomepageHero from './components/HomepageHero';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';

function App() {
  const [pageData,setPageData] = useState(null);

  return (
    <Router>
      <>
        <PageNavigation/>
        <div>
          {/* Page container */}
          <Switch>
            <Route exact path='/' component={HomepageHero} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/login' component={LoginPage} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
