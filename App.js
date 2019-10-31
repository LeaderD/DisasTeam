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


function App(){
  return (
    <View>
      {/* <Login /> */}
      <Welcome />
    </View>
  )
}

export default App;
