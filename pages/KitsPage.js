import React from 'react';
import {View} from 'react-native';

import Kits from '../comps/Kits';
import NavBar from '../comps/NavBar';

function KitsPage(){
   return (
    <View style={{flex:1, justifyContent:'center'}}>
        <View style={{flex:1}}>
        <Kits/>
    </View>

        <NavBar/>
    </View>
   )
};

export default KitsPage;
