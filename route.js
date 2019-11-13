import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import WelcomePage from './pages/WelcomePage';

function Route() {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="Login" component={LoginPage} initial={true} />
        <Scene key="Register" component={RegistrationPage} />
        <Scene key="Welcome" component={WelcomePage}/>
      </Stack>
    </Router>
  );
}

export default Route;
