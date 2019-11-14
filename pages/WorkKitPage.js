import React from 'react';
import {View} from 'react-native';

import WorkKit from '../comps/WorkKit'

function WorkKitPage(){
    return (
     <View style={{flex:1, justifyContent:'center'}}>
         <View style={{flex:1}}>
         <WorkKit/>
     </View>
         <NavBar/>
     </View>
    )
 };
 
 export default WorkKitPage;