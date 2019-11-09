import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import Login from './comps/Login'
import Welcome from './comps/Welcome'
import Route from './route'


function App(){
  return (
    <View style={{flex:1}}>
      <Route/>
    </View>
  )
}

export default App;
// export default from './storybook';