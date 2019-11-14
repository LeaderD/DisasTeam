import React from 'react';
import {View} from 'react-native';

import GrabNGoKit from '../comps/GrabNGoKit';
import NavBar from '../comps/NavBar';

function GrabNGoKitPage(){
    return (
     <View style={{flex:1, justifyContent:'center'}}>
         <View style={{flex:1}}>
         <GrabNGoKit/>
     </View>
         <NavBar/>
     </View>
    )
 };
 
 export default GrabNGoKitPage;