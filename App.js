import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import Login from './comps/Login';
import HomeKit from './comps/HomeKit'
import WorkKit from './comps/WorkKit'
import GrabNGoKit from './comps/GrabNGoKit';
import VehicleKit from './comps/VehicleKit';
import Kits from './comps/VehicleKit';
import WhiteButton from './comps/WhiteButton'
import RedButton from './comps/RedButton'
import SingleLineInput from './comps/SingleLineInput'
import Register from './comps/Register';
import NavBar from './comps/NavBar';
import ItemPopUp from './comps/ItemPopUp';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Help from './comps/Help';
import Route from './route'

function App(){
    console.disableYellowBox = true;
  
return (
    <View style={{flex:1}}>
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <NavBar /> */}
      {/* <HomeKit /> */}
      {/* <WorkKit /> */}
      {/*<GrabNGoKit />*/}
      {/* <ItemPopUp/> */}
      {/* <LoginPage/> */}
      {/*<Register />*/}
      {/* <Help /> */}
      {/* <Tutorial /> */}
      {/* <Dashboard/> */}
      {/* <ColorGuide/> */}
      {/* <ToolTip/> */}
      {/* <Kits/> */}
      {/* <Profile /> */}
      {/* <VehicleKit /> */}
    <Route/>
    </View>
  )
}

export default App;
