import React from 'react';
import {View} from 'react-native';

import Profile from '../comps/Profile';
import NavBar from '../comps/NavBar';

function ProfilePage(){
   return (
    <View>
        <Profile/>
        <NavBar/>
    </View>
   )
};

export default ProfilePage;