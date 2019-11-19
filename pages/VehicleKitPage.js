import React from 'react';
import {View} from 'react-native';

import VehicleKit from '../comps/VehicleKit'

function VehicleKitPage(){
    return (
     <View style={{flex:1, justifyContent:'center'}}>
         <View style={{flex:1}}>
         <VehicleKit/>
     </View>
         <NavBar/>
     </View>
    )
 };
 export default VehicleKitPage;