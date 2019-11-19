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
import HelpPage from './pages/HelpPage';
import HomeKitPage from './pages/HomeKitPage';
import VehicleKitPage from './pages/VehicleKitPage';
import WorkKitPage from './pages/WorkKitPage';
import GrabNGoKitPage from './pages/GrabNGoKitPage';

function Route() {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="Login" component={LoginPage}  />
        <Scene key="Register" component={RegistrationPage} />
        <Scene key="Welcome" component={WelcomePage}/>
        <Scene key="Kits" component={KitsPage} initial={true} />
        <Scene key="Dashboard" component={DashboardPage} />
        <Scene key="Profile" component={ProfilePage} />
        <Scene key="Help" component={HelpPage} />
        <Scene key="HomeKit" component={HomeKitPage}/>
        <Scene key="VehicleKit" component={VehicleKitPage} />
        <Scene key="WorkKit" component={WorkKitPage} />
        <Scene key="GrabNGoKit" component={GrabNGoKitPage} />
      </Stack>
    </Router>
  );
}

export default Route;
