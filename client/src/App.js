import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ContactState from './context/contact/contactState';
import PageNavigation from '../src/components/PageNavigation';
import HomepageHero from './components/HomepageHero';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import ContactsModule from './components/ContactsModule';

function App() {
  const [pageData,setPageData] = useState(null);

  return (
    <ContactState>
      <Router>
        <>
          <PageNavigation/>
          <div>
            {/* Page container */}
            <Switch>
              <Route exact path='/' component={HomepageHero} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/contacts' component={ContactsModule} />
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  );
}

export default App;
