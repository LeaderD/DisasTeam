/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import styles from '../styles/KitsStyle';
import HomeKitStyles from '../styles/HomeKitStyles';
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
        <SafeAreaView HomeKitStyles={styles.Cont}>
        <FadeInView>
        {/* Top Bar */}
        <View style={styles.TopBar}>
                <Text style={styles.Title}>Kits</Text>
        </View>

        {/* Content */}

                <View style={styles.ContentCont}>
                    <View style={styles.WrapCont}>
                    <TouchableOpacity
                    onPress={()=>Actions.HomeKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/home.png')}
                        />
                        <Text style={styles.KitsTxt1}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.WorkKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.KitsTxt1}>Work</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.GrabNGoKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt1}>Grab N' Go</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>Actions.VehicleKit()}>
                        <View style={styles.KitCont}>
                        <Image
                        style={styles.Icon}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.KitsTxt1}>Vehicle</Text>
                        </View>
                    </TouchableOpacity>


                    {/* <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.WorkKit()}>
                        <Image
                        style={styles.work}
                        source={require('../imgs/imgsPng/work.png')}
                        />
                        <Text style={styles.txtWor}>Work</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.GrabNGoKit()}>
                        <Image
                        style={styles.grabngo}
                        source={require('../imgs/imgsPng/grabngo.png')}
                        />
                        <Text style={styles.KitsTxt1}>Grab N' Go</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:"center"}}
                    onPress={()=>Actions.VehicleKit()}>
                        <Image
                        style={styles.car}
                        source={require('../imgs/imgsPng/car.png')}
                        />
                        <Text style={styles.txtVeh}>Vehicle</Text>
                    </TouchableOpacity> */}
                    </View>
                    </View>
                    </FadeInView>
        </SafeAreaView>
    )
}

export default Kits;
