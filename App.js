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


function App(){
  return (
    <View>
          <Login />
          <Welcome />
          <Info />
    </View>
  )
}

export default App;
