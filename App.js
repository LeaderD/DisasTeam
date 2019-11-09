import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './comps/Login'
import Welcome from './comps/Welcome'
import Info from './comps/Info'
import HomeKit from './comps/HomeKit'
import WhiteButton from './comps/WhiteButton'
import RedButton from './comps/RedButton'
import SingleLineInput from './comps/SingleLineInput'
import Register from './comps/Register';
 import NavBar from './comps/NavBar';
 import ItemPopUp from './comps/ItemPopUp';
 import LoginPage from './pages/LoginPage';
 import RegistrationPage from './pages/RegistrationPage';



function App(){
  return (
    <View>
          {/* <Login />
          <Welcome />
          <Info /> */}
<HomeKit />
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <NavBar /> */}
      {/* <ItemPopUp/> */}
      {/* <LoginPage/> */}
      {/* <RegistrationPage /> */}

    </View>
  )
}

export default App;
//export default from './storybook';