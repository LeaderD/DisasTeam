import React from 'react';
import {View} from 'react-native';

import Dashboard from '../comps/Dashboard';
import NavBar from '../comps/NavBar';

function DashboardPage(){
    return (
     <View style={{flex:1}}>
         <View style={{flex:1}}>
            <Dashboard/>
         </View>
         <NavBar/>
     </View>
    )
 };

export default DashboardPage;
