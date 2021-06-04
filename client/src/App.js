import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ContactState from './context/contact/contactState';
import PageNavigation from '../src/components/PageNavigation';
import LandingPage from './components/LandingPage';
import PokemonPage from './components/PokemonPage';
import LoginPage from './components/LoginPage';
import ContactsModule from './components/ContactsModule';
import mockHomePage from './components/LandingPage/_mocks';

function App() {

  return (
    <ContactState>
      <Router>
        <>
          {/* <PageNavigation/> */}
          <div>
            {/* Page container */}
            <Switch>
              <Route exact path='/' component={HomepageHero} />
              {/* <Route exact path='/pokemon' component={PokemonPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/contacts' component={ContactsModule} /> */}
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  );
}

export default App;
