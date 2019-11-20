import React from 'react';
import {View} from 'react-native';

import HomeKit from '../comps/HomeKit';
import NavBar from '../comps/NavBar';

function HomeKitPage(){
    return (
     <View style={{flex:1, justifyContent:'center'}}>
         <View style={{flex:1}}>
         <HomeKit/>
     </View>
         <NavBar/>
     </View>
    )
 };

 export default HomeKitPage;
