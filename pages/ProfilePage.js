import React from 'react';
import {View} from 'react-native';

import Profile from '../comps/Profile';
import NavBar from '../comps/NavBar';

function ProfilePage(){
    return (
     <View style={{flex:1, justifyContent:'center'}}>
         <View style={{flex:1}}>
         <Profile/>
     </View>
         <NavBar/>
     </View>
    )
 };
 

export default ProfilePage;