import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import Login from './comps/Login'
import HomeKit from './comps/HomeKit'
// import Welcome from './comps/Welcome'
// import WhiteButton from './comps/WhiteButton'
// import RedButton from './comps/RedButton'
// import SingleLineInput from './comps/SingleLineInput'
import Register from './comps/Register';
import NavBar from './comps/NavBar';
import ItemPopUp from './comps/ItemPopUp';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Help from './comps/Help';
import Welcome from './comps/Welcome'
import Route from './route'



function App(){
  return (
    <View style={{flex:1}}>
      {/* <Login/> */}
      {/* <Register /> */}
      {/*<NavBar />*/}
      <HomeKit />
      {/* <ItemPopUp/> */}
      {/* <LoginPage/> */}
      {/* <RegistrationPage /> */}
      {/* <Help /> */}
      {/* <Route/> */}
    </View>
  )
}

export default App;
// export default from './storybook';