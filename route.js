import React from 'react';
import {
        Router,
        Scene, 
        Stack
      } from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import WelcomePage from './pages/WelcomePage';
import KitsPage from './pages/KitsPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

function Route() {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="Login" component={LoginPage}  initial={true}/>
        <Scene key="Register" component={RegistrationPage} />
        <Scene key="Welcome" component={WelcomePage}/>
        <Scene key="Kits" component={KitsPage} />
        <Scene key="Dashboard" component={DashboardPage} />
        <Scene key="Profile" component={ProfilePage} />
      </Stack>
    </Router>
  );
}

export default Route;
