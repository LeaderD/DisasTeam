import React from 'react';
import {View} from 'react-native';

import Help from '../comps/Help'

function HelpPage(){
    return (
     <View style={{flex:1, justifyContent:'center'}}>
         <View style={{flex:1}}>
         <Help/>
     </View>
         <NavBar/>
     </View>
    )
 };
 
 export default HelpPage;