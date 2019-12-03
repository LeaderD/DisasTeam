import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

// import Login from './comps/Login';
import HomeKitPage from './pages/HomeKitPage'
// import WorkKit from './comps/WorkKit'
import HomeKit from './comps/HomeKit'
import WorkKit from './comps/WorkKit'
// import GrabNGoKit from './comps/GrabNGoKit';
import VehicleKit from './comps/VehicleKit'
// import Welcome from './comps/Welcome'
// import WhiteButton from './comps/WhiteButton'
// import RedButton from './comps/RedButton'
// import SingleLineInput from './comps/SingleLineInput'
// import Register from './comps/Register';
import NavBar from './comps/NavBar';
import ItemPopUp from './comps/ItemPopUp';
// import LoginPage from './pages/LoginPage';
// import RegistrationPage from './pages/RegistrationPage';
import Help from './comps/Help';
// import Welcome from './comps/Welcome';
import Route from './route'
import Tutorial from './comps/Tutorial';
import Dashboard from './comps/Dashboard';



function App(){
  return (
    <View style={{flex:1}}>
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <NavBar /> */}
      {/* <HomeKitPage /> */}
      {/* <HomeKit /> */}
      {/* <WorkKit /> */}
      {/* <GrabNGoKit /> */}
      {/* <VehicleKit /> */}
      {/* <ItemPopUp/> */}
      {/* <LoginPage/> */}
      {/* <RegistrationPage /> */}
      {/* <Help /> */}
      {/* <Route/> */}
      {/* <Tutorial /> */}
      <Dashboard/>
    </View>
  )
}

export default App;
// export default from './storybook';
