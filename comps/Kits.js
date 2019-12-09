/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import KitStyles from '../styles/KitsStyle';
import NavBar from './NavBar';
import {Actions} from 'react-native-router-flux';
  
const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [])
  
    

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


function Kits(){
    return (
        <SafeAreaView styles={KitStyles.Cont}>
        <FadeInView>
        <View style={KitStyles.TopBar}>
                <Text style={KitStyles.Title}>Kits</Text>
        </View>

                <View style={KitStyles.ContentCont}>
                    <View style={KitStyles.WrapCont}>
                    <TouchableOpacity
                    onPress={()=>Actions.HomeKit()}>
                        <View style={KitStyles.KitCont}>
                        <Image
                        style={KitStyles.Icon}
                        source={require('../imgs/imgsPng/home.png')}
                        />
                        <Text style={KitStyles.KitsTxt1}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.WorkKit()}>
                        <View style={KitStyles.KitCont}>
                        <Image
                        style={KitStyles.Icon}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={KitStyles.KitsTxt1}>Work</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.GrabNGoKit()}>
                        <View style={KitStyles.KitCont}>
                        <Image
                        style={KitStyles.Icon}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={KitStyles.KitsTxt1}>Grab N' Go</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.VehicleKit()}>
                        <View style={KitStyles.KitCont}>
                        <Image
                        style={KitStyles.Icon}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={KitStyles.KitsTxt1}>Vehicle</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
        </FadeInView>
        </SafeAreaView>
    )
}

export default Kits;
