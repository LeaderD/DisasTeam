import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function Route(){
    return (
        <Router> 
        <Stack key='root' hideNavBar={true}>
            <Scene key="Login" component={LoginPage} initial={true} /> 
            <Scene key="Register" component={RegistrationPage} /> 
        </Stack>
        <Stack key='nav'>
            
        </Stack>
            </Router>
    )
}

export default Route;