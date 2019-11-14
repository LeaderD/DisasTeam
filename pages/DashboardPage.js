import React from 'react';
import {View} from 'react-native';

import Dashboard from '../comps/Dashboard';
import NavBar from '../comps/NavBar';

function DashboardPage(){
   return (
    <View>
        <Dashboard/>
        <NavBar/>
    </View>
   )
};

export default DashboardPage;